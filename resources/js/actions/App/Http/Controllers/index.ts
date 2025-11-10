import DashboardController from './DashboardController'
import RoleController from './RoleController'
import MenuController from './MenuController'
import PermissionController from './PermissionController'
import UserController from './UserController'
import SettingAppController from './SettingAppController'
import AuditLogController from './AuditLogController'
import BackupController from './BackupController'
import UserFileController from './UserFileController'
import OrganizationController from './OrganizationController'
import OrganizationSwitcherController from './OrganizationSwitcherController'
import MediaFolderController from './MediaFolderController'
import Settings from './Settings'
import Auth from './Auth'

const Controllers = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    RoleController: Object.assign(RoleController, RoleController),
    MenuController: Object.assign(MenuController, MenuController),
    PermissionController: Object.assign(PermissionController, PermissionController),
    UserController: Object.assign(UserController, UserController),
    SettingAppController: Object.assign(SettingAppController, SettingAppController),
    AuditLogController: Object.assign(AuditLogController, AuditLogController),
    BackupController: Object.assign(BackupController, BackupController),
    UserFileController: Object.assign(UserFileController, UserFileController),
    OrganizationController: Object.assign(OrganizationController, OrganizationController),
    OrganizationSwitcherController: Object.assign(OrganizationSwitcherController, OrganizationSwitcherController),
    MediaFolderController: Object.assign(MediaFolderController, MediaFolderController),
    Settings: Object.assign(Settings, Settings),
    Auth: Object.assign(Auth, Auth),
}

export default Controllers