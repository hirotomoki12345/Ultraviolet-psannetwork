function runScriptInIframe() {
      const iframe = document.getElementById('uv-frame');
      const iframeWindow = iframe.contentWindow;
      const iframeDocument = iframe.contentDocument || iframeWindow.document;
            
      const script = `
(function(e){function t(e){return["DIV","SPAN"].includes(e.tagName)}var a={elem(t){(function(t){for(let a of e.ignore?.selector??[])if(t.matches(a))return!0;for(let a of e.ignore?.func??[])if(a(t))return!0;return!1})(t)||(n.add([t,t.parentElement]),t.remove())},list(e){Array.from(e).forEach((e=>a.elem(e)))},cls(e){a.list(document.getElementsByClassName(e))},selector(e){a.list(document.querySelectorAll(e))},func({func:e,selector:t=null}){let n=null==t?document.getElementsByClassName("*"):document.querySelectorAll(t);for(let t of n)e(t)&&a.elem(t)}},n=new Set,o=new Set;for(let[t,n]of Object.entries(e))if("ignore"!=t)for(let e of n)a[t](e);for(let[e,r]of n)o.has(e)||(o.add(e),r.isConnected&&t(r)&&(r.hasChildNodes()||a.elem(r)))})({cls:["adsbygoogle","mod_ad_container","brn-ads-box","gpt-ad","ad-box","top-ads-container","adthrive-ad"],selector:['[aria-label="advertisement"]','[class*="-ad "],[class*="-ad-"],[class$="-ad"],[class^="ad-"],[class^="adthrive"]',':is(div,iframe)[id^="google_ads_iframe_"]',"#aipPrerollContainer","span[data-ez-ph-id] span[data-ez-ph-owner-id] span.ezoicwhat"],func:[{selector:'[class*="ad" i],[id*="ad" i]',func(e){for(const t of[e.id,...e.classList])if(/(?<!lo|re|he)(ad|Ad|AD)(vertisement)?s?([tT]hrive)?([cC]ontent)?([eE]ngine|[nN]gin)?([cC]ontainer)?s?($|[-_,\s])/.test(t))return!0}},{selector:"div#preroll",func(e){for(let t of e.children)if(t.matches("div#aipBranding"))return!0}},{selector:"html > iframe",func:e=>!(!e.sandbox.contains("allow-scripts")||!e.sandbox.contains("allow-same-origin")||2!=e.sandbox.length||!e.src.toLowerCase().includes("gdpr"))}],ignore:{selector:["body",".ad-layout","#game-holder.game-holder-with-ad",".no-interstitial-ads"],func:[e=>{let t=document.getElementsByTagName("article");for(let a of t)if(e.contains(a))return!0}]}});
`;
      iframeWindow.eval(script);
        }

        document.getElementById('uv-frame').onload = runScriptInIframe;
