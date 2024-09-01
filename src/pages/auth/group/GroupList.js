import { useState } from "react";
import Modal from "../../../components/Modal";
import FormHeading from "../../../components/FormHeading";
import ViewIcon from "../../../components/Icon/ViewIcon";

function GroupList({ groups }) {
  const [showPermissionData, setShowPermissionData] = useState(false);
  const [showMenuData, setShowMenuData] = useState(false);
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [selectedMenu, setSelectedMenus] = useState([]);

  const [showGroupModal, setShowGroupModal] = useState(false);
  const [groupData, setGroupData] = useState([]);

  const handleShowMoreClick = (permissions) => {
    setSelectedPermissions(permissions);
    setShowPermissionData(true);
  };

  const handleShowMoreMenuClick = (menu) => {
    setSelectedMenus(menu);
    setShowMenuData(true);
  };

  const handleViewGroup = (group) => {
    setShowGroupModal(true);
    setGroupData(group);
  };

  return (
    <>
      <FormHeading title="Group List" />
      <Modal
        isOpen={showPermissionData}
        onClose={() => setShowPermissionData(false)}
        width="w-6/12 max-h-[90vh] overflow-auto"
      >
        <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-4xl mx-auto">
          <h1 className="text-xl font-semibold mb-4">Permissions</h1>
          <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-9/12">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {selectedPermissions.map((perm, index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td>{perm.resource}</td>
                  <td>{perm.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal>

      <Modal
        isOpen={showMenuData}
        onClose={() => setShowMenuData(false)}
        width="w-6/12 max-h-[90vh] overflow-auto"
      >
        <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-4xl mx-auto">
          <h1 className="text-xl font-semibold mb-4">Menus & Sub Menus</h1>
          <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-9/12">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">Icon</th>
                <th className="px-6 py-3">Menu Title</th>
                <th className="px-6 py-3">Sub Menu Title</th>
                <th className="px-6 py-3">Sub Menu URL</th>
              </tr>
            </thead>
            <tbody>
              {selectedMenu.map((perm, index) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td>
                    <i className={perm.menuID.icon}></i>
                  </td>
                  <td>{perm.menuID.menuTitle}</td>
                  <td>{perm.label}</td>
                  <td>{perm.url}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal>

      <Modal
        isOpen={showGroupModal}
        onClose={() => setShowGroupModal(false)}
        width="w-11/12 max-h-[95vh] overflow-auto"
      >
        <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-4xl mx-auto">
          <h1 className="text-xl font-semibold mb-4">Group Info</h1>
          <div>
            <h1> {groupData._id}</h1>
            <h1> {groupData.name}</h1>
            <h1> {groupData.code}</h1>
            <div>
              <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-4xl mx-auto">
                <h1 className="text-xl font-semibold mb-4">Permissions</h1>
                <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-9/12">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th className="px-6 py-3">Name</th>
                      <th className="px-6 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupData.permissions &&
                    groupData.permissions.length > 0 ? (
                      groupData.permissions.map((perm) => (
                        <tr key={perm._id}>
                          <td className="px-6 py-4">{perm.resource}</td>
                          <td className="px-6 py-4">{perm.action}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="2" className="px-6 py-4 text-center">
                          No permissions available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-4xl mx-auto">
                <h1 className="text-xl font-semibold mb-4">Menus</h1>
                <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-9/12">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th className="px-6 py-3">Name</th>
                      <th className="px-6 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupData.subMenus && groupData.subMenus.length > 0 ? (
                      groupData.subMenus.map((perm) => (
                        <tr key={perm._id}>
                          <td>
                            <i className={perm.menuID.icon}></i>
                          </td>
                          <td>{perm.menuID.menuTitle}</td>
                          <td>{perm.label}</td>
                          <td>{perm.url}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="2" className="px-6 py-4 text-center">
                          No permissions available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Table */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Code</th>
            <th className="px-6 py-3">Permissions</th>
            <th className="px-6 py-3">Menus</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {groups.length > 0 &&
            groups.map((group, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{group.name}</td>
                <td className="px-6 py-4">{group.code}</td>
                <td className="px-6 py-4">
                  {[...new Set(group.permissions.map((perm) => perm.resource))]
                    .slice(0, 5)
                    .map((resource, idx) => (
                      <p key={idx}>{resource}</p>
                    ))}
                  <button
                    className="text-blue-500 hover:underline mt-2"
                    onClick={() => handleShowMoreClick(group.permissions)}
                  >
                    Show More
                  </button>
                </td>
                {/* Sub - Menus */}
                <td className="px-6 py-4">
                  {[...new Set(group.subMenus.map((perm) => perm.label))]
                    .slice(0, 5)
                    .map((resource, idx) => (
                      <p key={idx}>{resource}</p>
                    ))}
                  <button
                    className="text-blue-500 hover:underline mt-2"
                    onClick={() => handleShowMoreMenuClick(group.subMenus)}
                  >
                    Show More
                  </button>
                </td>
                <td>
                  <ViewIcon onClick={() => handleViewGroup(group)} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default GroupList;
