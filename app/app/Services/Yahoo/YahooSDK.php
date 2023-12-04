<?php

namespace App\Services\Yahoo;

use App\Models\User;
use App\Services\Yahoo\Requestor;

/**
 * Internal Yahoo SDK
 */
class YahooSDK
{
    const NFL_FANTASY_2023_GAME_KEY = 423;
    const LEAGUE_ID = 280875;

    const LEAGUE = 'league';
    const TRANSACTION = 'transaction';
    const TEAM = 'team';

    private $_user;
    private $_requestor;

    // Request
    private $_resourceType;
    private $_subResourceKey;
    private $_resourceId;
    private $_subResourceId;
    private $_filters;
    private $_sort;
    private $_count;

    public static function factory()
    {
        return new self();
    }

    public function setUser(User $user)
    {
        $this->_user = $user;

        return $this;
    }

    public function getRequestor()
    {
        if (!$this->_requestor) {
            $this->_requestor = new Requestor($this->_user);
        }

        return $this->_requestor;
    }

    public function setResource(string $resourceType)
    {
        $this->_resourceType = $resourceType;

        return $this;
    }

    public function setResourceId(string $resourceId)
    {
        if ($this->_resourceType == self::TEAM) {
            $this->_resourceId = self::NFL_FANTASY_2023_GAME_KEY
                . '.l.'
                . self::LEAGUE_ID
                . '.t.'
                . $resourceId;
        } else {
            $this->_resourceId = self::NFL_FANTASY_2023_GAME_KEY
                . '.l.'
                . self::LEAGUE_ID;
        }

        return $this;
    }

    public function setSubResource(string $subResourceKey)
    {
        $this->_subResourceKey = $subResourceKey;

        return $this;
    }

    public function setSubResourceId(string $subResourceId)
    {
        $this->_subResourceId = $subResourceId;

        return $this;
    }

    public function setRequestParams($request)
    {
        $this->_filters = $request['filters'] ?? [];
        $this->_sort = $request['sort'] ?? null;
        $this->_count = $request['count'] ?? null;

        return $this;
    }

    public function doRequest()
    {
        $url = $this->_resourceType;

        if ($this->_resourceId) {
            $url .= '/' . $this->_resourceId;
        }

        if ($this->_subResourceKey) {
            $url .= '/' . $this->_subResourceKey;
        }

        if ($this->_sort) {
            $url .= ';sort=' . $this->_sort;
        }

        if ($this->_count) {
            $url .= ';count=' . $this->_count;
        }

        return $this->getRequestor()->request($url);
    }


    public function getLeaguesForLoggedInUser()
    {
        $url = "users;use_login=1/games;game_keys=" . self::NFL_FANTASY_2023_GAME_KEY . "/leagues";

        return $this->getRequestor()->request($url);
    }
}
