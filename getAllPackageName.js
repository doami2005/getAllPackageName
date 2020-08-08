/*

Made by doami2005
설치된 패키지명과 앱의 이름을 가져오는 함수입니다.
메신저봇R 전용입니다.


getAllPackageName();
// 설치된 모든 패키지명 반환

getAppName(패키지명);
// 해당 패키지명을 가진 앱 이름 반환

getAllPackageName().map(pkg => getAppName(pkg));
// 설치된 모든 앱 이름 반환


https://open.kakao.com/o/gXaUzu1b
질문은 여기로

*/

const PackageFuncs = {
    getAllPackageName = function () {
        let pkgs = [];
        let pack = Api.getContext().getPackageManager().getInstalledPackages(0);
        for (let i = 0; i < pack.size(); i++) {
            pkgs.push(pack.get(i).packageName);
        }
        return pkgs;
    },
    getAppName = function (packageName) {
        let pm = Api.getContext().getPackageManager();
        let info = pm.getApplicationInfo(packageName, android.content.pm.PackageManager.GET_UNINSTALLED_PACKAGES);
        return pm.getApplicationLabel(info).toString();
    }
}
