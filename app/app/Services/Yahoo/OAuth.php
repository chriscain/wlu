<?php

namespace App\Services\Yahoo;

use App\Models\Setting;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use League\OAuth2\Client\Provider\GenericProvider;

/**
 * Class for managing yahoo oauth
 */
class OAuth
{
    const REDIRECT_URI = 'https://chris-cain.us-1.sharedwithexpose.com/yahoo/redirect';
    const YAHOO_ACCESS_TOKEN_URL = 'https://api.login.yahoo.com/oauth/v2/get_token';
    const YAHOO_REQUEST_TOKEN_URL = 'https://api.login.yahoo.com/oauth/v2/get_request_token';
    const OAUTH_SETTING_NAME = 'yahoo_oauth';

    protected static $_provider;
    protected static $_session;

    public static function getClientId(): string
    {
        return env('YAHOO_CLIENT_ID');
    }

    public static function getClientSecret(): string
    {
        return env('YAHOO_CLIENT_SECRET');
    }

    public static function getRedirectUrl(): string
    {
        return self::REDIRECT_URI;
    }

    public static function getAuthorizationUrl(): string
    {
        $provider = self::getOAuthProvider();
        $authUrl = $provider->getAuthorizationUrl();
        $state = $provider->getState();

        session(['oauth2state' => $state]);

        return $authUrl;
    }

    public static function handleCallback(string $code, string $state): void
    {
        Log::debug('Starting callback with code ' . $code . ' and state ' . $state);

        $provider = self::getOAuthProvider();
        $token = $provider->getAccessToken('authorization_code', ['code' => $code]);
        $userId = Auth::user()->id;

        $existingOAuthSetting = Setting::where('name', self::OAUTH_SETTING_NAME)
            ->where('user_id', $userId)
            ->first();

        $data = [
            'access_token' => $token->getToken(),
            'refresh_token' => $token->getRefreshToken(),
            'expires' => $token->getExpires(),
        ];

        $dataToSave = json_encode($data);

        if ($existingOAuthSetting) {
            $existingOAuthSetting->value = $dataToSave;
            $existingOAuthSetting->save();
        } else {
            $setting = new Setting();
            $setting->name = self::OAUTH_SETTING_NAME;
            $setting->value = $dataToSave;
            $setting->user_id = $userId;
            $setting->save();
        }
    }

    public static function getOAuthProvider()
    {
        if (!isset(self::$_provider)) {
            self::$_provider = new GenericProvider([
                'clientId' => self::getClientId(),
                'clientSecret' => self::getClientSecret(),
                'redirectUri' => self::getRedirectUrl(),
                'urlAuthorize' => 'https://api.login.yahoo.com/oauth2/request_auth',
                'urlAccessToken' => 'https://api.login.yahoo.com/oauth2/get_token',
                'urlResourceOwnerDetails' => null,
            ]);
        }
        return self::$_provider;
    }
}
