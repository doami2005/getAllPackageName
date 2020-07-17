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
