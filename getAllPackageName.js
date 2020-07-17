/*

Made by doami2005
설치된 패키지명과 앱의 이름을 가져오는 함수입니다.
메신저봇R 전용입니다.

https://open.kakao.com/o/gXaUzu1b
질문은 여기로

*/

function getAllPackageName() {
    let pkgs = [];
    let pack = Api.getContext().getPackageManager().getInstalledPackages(0);
    for (let i = 0; i < pack.size(); i++) {
        pkgs.push(pack.get(i).packageName);
    }
    return pkgs;
}

function getAppName(packageName) {
    let pm = Api.getContext().getPackageManager();
    return pm.getApplicationLabel(packageName, android.content.pm.PackageManager.GET_UNINSTALLED_PACKAGES).toString();
}
