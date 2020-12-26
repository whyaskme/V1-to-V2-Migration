const objIdEmpty = 'ObjectId("000000000000000000000000")';
const objIdTenant = 'ObjectId("57b2229fd00bc11c2c18ec3d")';

const envLegacyLabel = '<b>v1 (Legacy)</b>';
const envUpgradeLabel = '<b>v2 (MicroServices)</b>';

const sourceDB = "Db -> localhost\Volusion-V1";
const sourceServices = "Svc -> http://localhost/api/";

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

$(document).ready(function () {
    $("#span-tenantId").html('');
    $("#span-envLegacyLabel").html(envLegacyLabel);
    $("#span-envUpgradeLabel").html(envUpgradeLabel);
    $("#span-repository-type").html(sourceDB);

    // Reset radio button for page refresh
    $("input[name=opt-version][value=v1]").attr('checked', 'checked');
});

function expandMigrationPanel()
{
    $("#div-version-switch-panel").toggle();
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
    msg += '<b>Upgrade:</b> We need to migrate your data (products, images, customers, orders, payment porcessors...etc) <i><b>Forward</b> to the ' + envUpgradeLabel + '</i> environment.';
    msg += '&nbsp;We will send you an email once finished. In the meantime, your site will continue to run as it is.';
    msg += '</div>';
    msg += '<div id=\'div-button-container\'>';
    msg += '<input type =\'button\' value=\'Upgrade\' class=\'button\' onclick=\'javascript: continueMigration(1);\' />';
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
    msg += '<b>Downgrade:</b> We need to migrate your data (products, images, customers, orders, payment porcessors...etc) <i><b>Back</b> to the ' + envLegacyLabel + '</i> environment.';
    msg += '&nbsp;We will send you an email once finished. In the meantime, your site will continue to run as it is.';
    msg += '</div>';
    msg += '<div id=\'div-button-container\'>';
    msg += '<input type =\'button\' value=\'Downgrade\' class=\'button\' onclick=\'javascript: continueMigration(0);\' />';
    msg += '</div>';

    $("#div-system-messages").html(msg);

    $("#span-repository-type").html(sourceDB);

    $("#span-migration-info-container").show();
    $("#span-tenant-info-container").show();
}

function continueMigration(migrationType) {

    let msgTenantInfo = '';

    msg = '';

    if (migrationType === 1) {

        $("#span-tenantId").html(objIdTenant);
        msgTenantInfo = 'Called Api and got back TenantId: ' + objIdTenant + '.';
        msgTenantInfo += ' Upgrading system now.';

        alert(msgTenantInfo);

        migrationCompleted = true;

        msg += '<div>';
        msg += 'Upgrading <i><b>Forward</b> to the ' + envUpgradeLabel + '</i> from ' + envLegacyLabel + ' environment.';
        msg += '</div>';
        msg += '<div id=\'div-progress-bar-container\'>';
        msg += '<div id=\'div-progress-bar-detail\'>Upgrade in progress...</div>';
        msg += '</div>';
        msg += '<div id=\'div-button-container\'>';
        msg += '<input type =\'button\' value=\'Cancel Upgrade\' class=\'button\' onclick=\'javascript: cancelMigration(0);\' />';
        msg += '</div>';
    }
    else {

        $("#span-tenantId").html('');

        alert("Downgrading system now.");

        msg += '<div>';
        msg += 'Downgrading <i><b>Back</b> to the ' + envLegacyLabel + '</i> from ' + envUpgradeLabel + ' environment.';
        msg += '</div>';
        msg += '<div id=\'div-progress-bar-container\'>';
        msg += '<div id=\'div-progress-bar-detail\'>Downgrade in progress...</div>';
        msg += '</div>';
        msg += '<div id=\'div-button-container\'>';
        msg += '<input type =\'button\' value=\'Cancel Downgrade\' class=\'button\' onclick=\'javascript: cancelMigration(0);\' />';
        msg += '</div>';
    }


    $("#div-system-messages").html(msg);

    //$("#div-version-switch-panel").toggle();
}