# TweetdeckQLC

[![license](https://img.shields.io/github/license/Favna/TweetdeckQLC.svg?style=flat-square)](https://github.com/Favna/TweetdeckQLC/blob/master/LICENCE.md) [![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow)](https://twitter.com/Favna_)

***TweetdeckQLC - Automatically put the tweet link on the clipboard when you click "copy link"***

## Downloads

***Just click the link below and your userscript extension should automatically pick it up***

[Click here to download](https://github.com/Favna/TweetdeckQLC/raw/master/TweetdeckQLC.user.js)

If you do not have a userscript manager I personally recommend ViolentMonkey, follow one of the URLs below to get it for your browser:

[ViolentMonkey for Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag?hl=en "ViolentMonkey for Chrome")|
:--|

[ViolentMonkey for Firefox Quantum](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/ "ViolentMonkey for Firefox Quantum")|
:--|

[ViolentMonkey for Opera](https://addons.opera.com/en/extensions/details/violent-monkey/ "ViolentMonkey for Opera")|
:--|

[TamperMonkey for MS Edge](https://tampermonkey.net/?browser=edge "TamperMonkey for MS Edge")|
:--|

[TamperMonkey for Safari](https://tampermonkey.net/?ext=dhdg&browser=safari "TamperMonkey for Safari")|
:--|

## How it works

As soon as you load the tweetdeck page an event listener gets bound to the entire page which checks if the action menu for a tweet is open. As soon as an action menu is opened the link to that tweet is put onto your clipboard for sharing. No need to press the "copy link to tweet" button ever again.

Button to press to get the link is shown in the red square here:

![](https://favna.s-ul.eu/HslY60Nm.png)

Whenever it is pressed the script waits 2 seconds and then once again initiates the event listener to check for a new instance for the action menu to open for when you want to copy another link at a later time

## Does this slow down Tweetdeck?

Personally I have not noticed any slow down, however my system has high quality hardware so I cannot say how this will affect low-to-medium specced systems.

## Buy me a donut

This project is open source and always will be, even if I don't get donations. That said, I know there are people out there that may still want to donate just to show their appreciation so this is for you guys. Thanks in advance!

I accept donations through PayPal, BitCoin, Ethereum and LiteCoin. You can use the buttons below to donate through your method of choice

|Donate With|QR|Address|
|:---:|:---:|:---:|
<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XMAYCF9SDHZ34"><img src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/ribbon/paypaldonate.png"></a>|<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XMAYCF9SDHZ34"><img src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/ribbon/paypalqr.png" width="128"></a>|[Donate with PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XMAYCF9SDHZ34)|
<img src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/ribbon/bitcoindonate.png">|<img src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/ribbon/bitcoinqr.png" width="128">|<a href="bitcoin:1E643TNif2MTh75rugepmXuq35Tck4TnE5?amount=0.01&label=Favna%27%20Ribbon%20Discord%20Bot">1E643TNif2MTh75rugepmXuq35Tck4TnE5</a>|
<img src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/ribbon/ethereumdonate.png">|<img src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/ribbon/ethereumqr.png" width="128">|<a href="ethereum:0xF653F666903cd8739030D2721bF01095896F5D6E?amount=0.01&label=Favna%27%20Ribbon%20Discord%20Bot">0xF653F666903cd8739030D2721bF01095896F5D6E</a>|
<img src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/ribbon/litecoindonate.png">|<img src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/ribbon/litecoinqr.png" width="128">|<a href="litecoin:LZHvBkaJqKJRa8N7Dyu41Jd1PDBAofCik6?amount=0.01&label=Favna%27%20Ribbon%20Discord%20Bot">LZHvBkaJqKJRa8N7Dyu41Jd1PDBAofCik6</a>|
