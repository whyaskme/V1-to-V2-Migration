const objIdEmpty = 'ObjectId("000000000000000000000000")';
const objIdTenant = 'ObjectId("57b2229fd00bc11c2c18ec3d")';

const envLegacyLabel = '<b>v1 (Legacy)</b>';
const envUpgradeLabel = '<b>v2 (MicroServices)</b>';

const sourceDB = "Db => sql:localhost\\Volusion-V1";
const sourceServices = "Svc => http://localhost/api/MigrationServices";

var msg = "";
var migrationCompleted = false;

var msgUpgrade = '';
msgUpgrade += '';
msgUpgrade += '';
msgUpgrade += '';

var msgDowngrade = '';
msgDowngrade += '';
msgDowngrade += '';
msgDowngrade += '';

//alert("Here...");

$(document).ready(function () {
    $("#span-tenantId").html(objIdEmpty);
    $("#span-envLegacyLabel").html(envLegacyLabel);
    $("#span-envUpgradeLabel").html(envUpgradeLabel);
    $("#span-repository-type").html(sourceDB);

    // Reset radio button for page refresh
    $("input[name=opt-version][value=v1]").attr('checked', 'checked');

    //alert("doc ready");
});

function selectSite(selectedMerchant) {
    alert("Merchant: " + selectedMerchant);
}

function expandMigrationPanel() {
    $("#div-version-switch-panel").toggle();
    $('input[name=opt-version]').attr("disabled", false);
}

function setVersion(value) {

    $("#div-system-messages").show();

    if (value === 'v1') {
        migrateVersionFromV2();
    }
    else {
        migrateVersionToV2();
    }
}

function migrateVersionToV2() {
    //$("#span-tenantId").html(objIdTenant);

    msg = "";
    msg += '<div>';
    msg += '<b>Upgrade:</b> We need to migrate your data => Merchant account, users (admin, customer & affiliate), products, images, orders, providers (messaging, notification, payment & social)...etc. <b>Forward</b> to the ' + envUpgradeLabel + ' environment.';
    msg += '&nbsp;We will send you an email once finished. In the meantime, your site will continue to run as it is.';
    msg += '</div>';
    msg += '<div id=\'div-button-container\'>';
    msg += '<input id=\'btn-migrate\' type=\'button\' value=\'Upgrade Site\' class=\'button\' onclick=\'javascript: continueMigration(1);\' />';
    msg += '</div>';

    $("#div-system-messages").html(msg);

    $("#span-repository-type").html(sourceServices);

    $("#span-migration-info-container").show();
    $("#span-tenant-info-container").show();
}

function migrateVersionFromV2() {
    //$("#span-tenantId").html(objIdEmpty);

    msg = "";
    msg += '<div>';
    msg += '<b>Downgrade:</b> We need to migrate your data => Merchant account, users (admin, customer & affiliate), products, images, orders, providers (messaging, notification, payment & social)...etc. <b>Back</b> to the ' + envLegacyLabel + ' environment.';
    msg += '&nbsp;We will send you an email once finished. In the meantime, your site will continue to run as it is.';
    msg += '</div>';
    msg += '<div id=\'div-button-container\'>';
    msg += '<input id=\'btn-migrate\' type=\'button\' value=\'Downgrade Site\' class=\'button\' onclick=\'javascript: continueMigration(0);\' />';
    msg += '</div>';

    $("#div-system-messages").html(msg);

    $("#span-repository-type").html(sourceDB);

    $("#span-migration-info-container").show();
    $("#span-tenant-info-container").show();
}

function continueMigration(migrationType) {

    let msgTenantInfo = '';

    msg = '';

    $('input[name=opt-version]').attr("disabled", true);

    if (migrationType === 1) {

        $("#span-tenantId").html(objIdTenant);
        msgTenantInfo = 'Called v2 Registration Api and got back TenantId: ' + objIdTenant + '.';
        msgTenantInfo += ' Kickoff Upgrade ETL process now.';

        alert(msgTenantInfo);

        migrationCompleted = true;

        msg += '<div>';
        msg += 'Upgrading to ' + envUpgradeLabel + ' from the ' + envLegacyLabel + ' environment.';
        msg += '</div>';
        msg += '<div id=\'div-progress-bar-container\'>';
        msg += '<div id=\'div-progress-bar-detail\'>Migrating merchant account...</div>';
        msg += '</div>';
        msg += '<div id=\'div-button-container\'>';
        msg += '<input id=\'btn-migrate\' type=\'button\' value=\'Cancel Upgrade\' class=\'button\' onclick=\'javascript: cancelMigration(1);\' />';
        msg += '</div>';
    }
    else {

        $("#span-tenantId").html('');

        alert("Kickoff Downgrade ETL process now.");

        msg += '<div>';
        msg += 'Downgrading from ' + envUpgradeLabel + '</i> to the ' + envLegacyLabel + ' environment.';
        msg += '</div>';
        msg += '<div id=\'div-progress-bar-container\'>';
        msg += '<div id=\'div-progress-bar-detail\'>Downgrade in progress...</div>';
        msg += '</div>';
        msg += '<div id=\'div-button-container\'>';
        msg += '<input id=\'btn-migrate\' type=\'button\' value=\'Cancel Downgrade\' class=\'button\' onclick=\'javascript: cancelMigration(0);\' />';
        msg += '</div>';
    }


    $("#div-system-messages").html(msg);

    //$("#div-version-switch-panel").toggle();
}

function cancelMigration(direction) {
    alert("cancelMigration > " + direction);
    $('input[name=opt-version]').attr("disabled", false);
    resetMigration();
}

function resetMigration() {
    alert("resetMigration UI");
}