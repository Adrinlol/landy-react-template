import { useState, useEffect } from 'react';
import { Table, Tabs, message } from 'antd';
import { collection, query, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../../config/firebase';
import Container from '../../common/Container';
import styled from 'styled-components';

const { TabPane } = Tabs;

const AdminContainer = styled(Container)`
  padding-top: 100px;
  min-height: calc(100vh - 100px);
`;

const TableContainer = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

interface Registration {
  id: string;
  name: string;
  email: string;
  contactNumber: string;
  district: string;
  institution: string;
  timestamp: string;
  [key: string]: any;
}

interface Contact {
  id: string;
  name: string;
  contactNumber: string;
  timestamp: string;
  [key: string]: any;
}

const Admin = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      // Fetch registrations
      const registrationsQuery = query(
        collection(db, 'registrations'),
        orderBy('timestamp', 'desc')
      );
      const registrationsSnapshot = await getDocs(registrationsQuery);
      const registrationsData = registrationsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate().toLocaleString() || 'N/A'
      })) as Registration[];

      // Fetch contacts
      const contactsQuery = query(
        collection(db, 'contacts'),
        orderBy('timestamp', 'desc')
      );
      const contactsSnapshot = await getDocs(contactsQuery);
      const contactsData = contactsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate().toLocaleString() || 'N/A'
      })) as Contact[];

      setRegistrations(registrationsData);
      setContacts(contactsData);
    } catch (error) {
      message.error('Failed to fetch data');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const registrationColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Contact', dataIndex: 'contactNumber', key: 'contactNumber' },
    { title: 'District', dataIndex: 'district', key: 'district' },
    { title: 'Institution', dataIndex: 'institution', key: 'institution' },
    { title: 'Timestamp', dataIndex: 'timestamp', key: 'timestamp' },
  ];

  const contactColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Contact Number', dataIndex: 'contactNumber', key: 'contactNumber' },
    { title: 'Timestamp', dataIndex: 'timestamp', key: 'timestamp' },
  ];

  return (
    <AdminContainer>
      <h1>Admin Dashboard</h1>
      <TableContainer>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Registrations" key="1">
            <Table
              dataSource={registrations}
              columns={registrationColumns}
              loading={loading}
              rowKey="id"
              scroll={{ x: true }}
            />
          </TabPane>
          <TabPane tab="Contacts" key="2">
            <Table
              dataSource={contacts}
              columns={contactColumns}
              loading={loading}
              rowKey="id"
              scroll={{ x: true }}
            />
          </TabPane>
        </Tabs>
      </TableContainer>
    </AdminContainer>
  );
};

export default Admin; 