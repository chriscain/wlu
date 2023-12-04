<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Services\Yahoo\Requestor;
use App\Services\Yahoo\OAuth;

class YahooController extends Controller
{

    /**
     * Entry point function to get the authorization url
     * for Yahoo (will return a redirectUrl)
     * @return [type] [description]
     */
    public function authWithYahoo()
    {
        return OAuth::getAuthorizationUrl();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleRedirect(Request $request)
    {
        $code = $request->input('code');
        $state = $request->input('state');

        OAuth::handleCallback($code, $state);
    }

    public function requestTeams()
    {
        $user = Auth::user();

        $requestor = new Requestor($user);

        return $requestor->request();
    }
}
