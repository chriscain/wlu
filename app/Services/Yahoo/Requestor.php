<?php

namespace App\Services\Yahoo;

use App\Models\Setting;
use App\Models\User;
use App\Services\Yahoo\OAuth;
use Illuminate\Support\Facades\Log;
use League\OAuth2\Client\Token\AccessToken;

/**
 * Class for managing yahoo oauth
 */
class Requestor
{
    const BASE_URI = 'https://fantasysports.yahooapis.com/fantasy/v2/';

    private $_user;
    private $_accessToken;

    function __construct(User $user)
    {
        $this->_user = $user;
    }

    public function isEnabled(): bool
    {
        return (bool) $this->getAccessToken($this->_user);
    }

    /**
     * @return AccessToken|null
     */
    public function getAccessToken()
    {
        if (!$this->_accessToken) {
            $setting = $this->getOAuthSetting();

            $settingValue = $setting->value;
            if (!$settingValue) {
                return null;
            }

            $accessTokenData = json_decode($settingValue, true);
            if (!$accessTokenData) {
                return null;
            }

            $this->_accessToken = new \League\OAuth2\Client\Token\AccessToken($accessTokenData);
        }

        return $this->_accessToken;
    }

    public function getRefreshToken()
    {
        $setting = $this->getOAuthSetting();

        $refreshToken = $setting->value;
        if (empty($refreshToken)) {
            return null;
        }

        $refreshTokenData = json_decode($refreshToken, true);
        if (!$refreshTokenData) {
            return null;
        }

        return OAuth::getOAuthProvider()->getAccessToken('refresh_token', [
            'refresh_token' => $refreshTokenData['refresh_token'],
        ]);
    }

    /**
     * Make an authenticated request.
     *
     * @param string $path The relative URI path for the request
     * @param string $method One of 'GET', 'POST', 'DELETE'
     * @param string $postBody The body of the request, if applicable
     * @param array $headers Any additional headers for the request (KV pairs)
     * @return \GuzzleHttp\Psr7\Response
     */
    public function request($path = '', $method = 'GET')
    {
        $accessToken = $this->getAccessToken();
        if (!$accessToken) {
            Log::debug('no access token found');
        }

        if ($accessToken->hasExpired()) {
            $accessToken = $this->getRefreshToken();
        }

        $client = new \GuzzleHttp\Client(['base_uri' => self::BASE_URI]);

        // To request json, not XML from Yahoo
        $requestPath = $path . '?format=json';

        $headers = [
            'Authorization' => 'Bearer ' . $accessToken,
            'Content-Type'  => 'application/json',
        ];

        return $client->request($method, $requestPath, [
            'headers' => $headers
        ]);
    }

    private function getOAuthSetting()
    {
        return Setting::where('name', OAuth::OAUTH_SETTING_NAME)
            ->where('user_id', $this->_user->id)
            ->first();
    }
}
