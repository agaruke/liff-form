$(document).ready(function () {
    var liffId = "2000938587-TMdgMIvB";
    initializeLiff(liffId);
})

function initializeLiff(liffId) {
    liff
        .init({
            liffId: liffId
        })
        .then(() => {
            if (!liff.isInClient() && !liff.isLoggedIn()) {
                window.alert("LINEアカウントでログインするか、LINEアプリから開いてください。");
                liff.login({redirectUri: location.href});
            }else{
                const accessToken = liff.getAccessToken();
                var formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfZQxUho8kSTid0kPcJxa3J-sz1H4EUxuI8qpkAbanLQXZ0NA/viewform?embedded=true&usp=pp_url&entry.1009335277='+accessToken;
                var iframe = document.querySelector('iframe');
                iframe.setAttribute('src', formUrl);
            }
        })
        .catch((err) => {
            window.alert('LIFF Initialization failed: ' + err);
        });
}