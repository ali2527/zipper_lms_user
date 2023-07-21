import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Typography,
  List,
  Card,
  Input,
  Modal,
  Button,
  Popover,
  Layout,
  Checkbox,
  Skeleton,
  Table,
  Spin,
  Select,
  Image,
  Pagination,
  DatePicker,
  message,
} from "antd";
import dayjs from "dayjs";
import { UserOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { FaSearch, FaFilter, FaCaretDown, FaEye } from "react-icons/fa";
import {AiOutlineEye} from "react-icons/ai";
import ClientLayout from "../../components/ClientLayout";
import { Get } from "../../config/api/get";
import { USERS } from "../../config/constants/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PaymentLogs() {
  const token = useSelector((state) => state.user.userToken);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([ {
    key: '1',
    lessonId: '#123456',
    tutor: "Jhon",
    noOfLesson:2,
    lessonDate: new Date(),
    charge: 50,
    type:"tutoring"
  },
  {
    key: '2',
    lessonId: '#123456',
    tutor: "Jhon",
    noOfLesson:1,
    lessonDate: new Date(),
    charge: 50,
    type:"tutoring"
  },
  {
    key: '3',
    lessonId: '#123456',
    tutor: "Jhon",
    noOfLesson:1,
    lessonDate: new Date(),
    charge: 50,
    type:"tutoring"
  },
  {
    key: '4',
    lessonId: '#123456',
    tutor: "Jhon",
    noOfLesson:1,
    lessonDate: new Date(),
    charge: 50,
    type:"tutoring"
  },
  {
    key: '5',
    lessonId: '#123456',
    tutor: "Jhon",
    noOfLesson:2,
    lessonDate: new Date(),
    charge: 50,
    type:"tutoring"
  },
  {
    key: '6',
    lessonId: '#123456',
    tutor: "Jhon",
    noOfLesson:3,
    lessonDate: new Date(),
    charge: 50,
    type:"tutoring"
  },
  {
    key: '7',
    lessonId: '#123456',
    tutor: "Jhon",
    noOfLesson:1,
    lessonDate: new Date(),
    charge: 50,
    type:"tutoring"
  },
  {
    key: '8',
    lessonId: '#123456',
    tutor: "Jhon",
    noOfLesson:2,
    lessonDate: new Date(),
    charge: 50,
    type:"tutoring"
  },
  {
    key: '9',
    lessonId: '#123456',
    tutor: "Jhon",
    noOfLesson:1,
    lessonDate: new Date(),
    charge: 50,
    type:"tutoring"
  },
  {
    key: '10',
    lessonId: '#123456',
    tutor: "Jhon",
    noOfLesson:1,
    lessonDate: new Date(),
    charge: 50,
    type:"tutoring"
  },
 ]);
  const [paginationConfig, setPaginationConfig] = useState({
    pageNumber: 1,
    limit: 10,
    totalDocs: 0,
    totalPages: 0,
  });
  const navigate = useNavigate();


  const [filter, setFilter] = useState({
    status: null,
    keyword: "",
    from: null,
    to: null,
  });

  const startIndex =
    (paginationConfig.pageNumber - 1) * paginationConfig.limit + 1;
  const endIndex = Math.min(
    startIndex + paginationConfig.limit - 1,
    paginationConfig.totalDocs
  );
  const message = `Showing records ${endIndex} of ${paginationConfig.totalDocs}`;


  useEffect(() => {
    // getUsers();
  }, []);

  

  const handlePageChange = (pageNumber) => {
    setPaginationConfig({
      ...paginationConfig,
      pageNumber: pageNumber,
    });

    getUsers(pageNumber);
  };

  const handleSearch = (value) => {
    setFilter({
      ...filter,
      keyword: value,
    });
  };

  const handleStatusChange = (value) => {
    setFilter({
      ...filter,
      status: value,
    });
  };

  const resetFilter = () => {
    setFilter({
      status: null,
      keyword: "",
      from: null,
      to: null,
    });
    getUsers(paginationConfig.pageNumber, paginationConfig.limit, "", true);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const handleFrom = (date) => {
    setFilter({
      ...filter,
      from: date,
    });
  };

  const handleTo = (date) => {
    setFilter({
      ...filter,
      to: date,
    });
  };

  const handleLimitChange = (pageSize) => {
    setPaginationConfig({
      ...paginationConfig,
      limit: pageSize,
      current: 1,
    });

    getUsers(1, pageSize);
  };

  const handleStatus = async () => {
    try {
      const index = users.findIndex((user) => user._id == selectedUser._id);

      console.log(index)
      const response = await Get(USERS.toggleStatus + "/" + selectedUser._id , token,{});
      const newUsers = [...users];
      
      console.log(">>>>",newUsers[index].isActive)
      console.log(">>>>",selectedUser.isActive)
      newUsers[index].isActive = !selectedUser.isActive;
      setModalOpen(false);
      setUsers(newUsers);
    } catch (error) {
      console.log(error.message);
    }  
    
  };
  

  console.log("users", users.map(item => item.isActive))


  const getUsers = async (pageNumber, pageSize, search, reset = false) => {
    setLoading(true);
    try {
      const response = await Get(USERS.get, token, {
        page: pageNumber
          ? pageNumber.toString()
          : paginationConfig.pageNumber.toString(),
        limit: pageSize
          ? pageSize.toString()
          : paginationConfig.limit.toString(),
        status: reset ? "" : filter.status || null,
        keyword: search ? search : null,
        from: reset ? "" : filter?.from ? filter?.from.toISOString() : "",
        to: reset ? "" : filter?.to ? filter?.to.toISOString() : "",
      });
      setLoading(false);
      console.log("response", response);
      if (response?.docs) {
        setUsers(response?.docs);
        setPaginationConfig({
          pageNumber: response?.page,
          limit: response?.limit,
          totalDocs: response?.totalDocs,
          totalPages: response?.totalPages,
        });
      } else {
        message.error("Something went wrong!");
        console.log("error====>", response);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  console.log("paginationConfig", paginationConfig);

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  const columns = [
    {
      title: "S. No.	",
      dataIndex: "key",
      key: "key",
      width: 100,
      render: (value, item, index) => (index < 9 && "0") + (index + 1),
    },
    {
      title: "Lesson ID",
      dataIndex: "lessonId",
      key: "lessonId",
    },
    {
      title: "Tutor/Coach Name",
      dataIndex: "tutor",
      key: "tutor",
    },
    {
      title: "Lesson Date",
      dataIndex: "lessonDate",
      key: "lessonDate",
      render: (item) => <span>{dayjs(item).format("M/D/YYYY")}</span>,
    },
    {
      title: "Number of Lesson",
      dataIndex: "noOfLesson",
      key: "noOfLesson",
      render: (item) => <span>{item}</span>,
    },
    {
      title: "Lesson Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Lesson Charge",
      dataIndex: "charge",
      key: "charge",
      render: (item) => <span>${item}</span>,
    },
  ];

  const filterContent = (
    <div className="filterDropdown">
      <div>
        <p className="mainLabel" style={{ padding: "10px" }}>
          Filter
        </p>
      </div>
      <hr style={{ margin: 0 }} />

      <div className="filterDropdownBody">
        <p className="mainLabel">Lesson Date:</p>
        <DatePicker
          className="mainInput filterInput"
          value={filter.from}
          onChange={(e) => handleFrom(e)}
          placeholder="From"
        />
        <DatePicker
          className="mainInput filterInput"
          value={filter.to}
          onChange={(e) => handleTo(e)}
          placeholder="To"
        />

        <p className="mainLabel">Lesson Type:</p>

        <Select
          size={"large"}
          className="filterSelectBox"
          placeholder="Select Status"
          value={filter.status}
          onChange={(e) => handleStatusChange(e)}
          style={{
            width: "100%",
            marginBottom: "10px",
            textAlign: "left",
          }}
          options={[
            { value: "active", label: "Active" },
            { value: "inactive", label: "Inactive" },
          ]}
        />

        <Button
          type="primary"
         
          block
          size={"large"}
          style={{ marginBottom: "10px" }}
          className="loginButton"
          onClick={() => getUsers()}
        >
          Apply
        </Button>
        <Button
          type="primary"
         
          block
          size={"large"}
          className="loginButton"
          onClick={() => resetFilter()}
        >
          Clear All
        </Button>
      </div>
    </div>
  );



  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Row
        className="blueBackground"
        style={{
          height: "45vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography.Title
          className="fontFamily1"
          style={{ fontSize: "30px", color: "white" }}
        >
          {<> Payment Logs</>}
        </Typography.Title>
      </Row>

      {/* section 2 */}
      <Row
        className="whiteBackground"
        style={{ backgroundColor: "white", justifyContent: "center" }}
      >
        <Col xs={24} md={22}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: "100px 20px",
            }}
          >
            <Card
              className="infoBox"
              bordered={false}
              style={{
                width: "100%",
                padding: "20px",
              }}
            >
            
      <div className="boxDetails">
        <Row style={{ padding: "10px 20px" }}>
          <Col xs={24} md={12}>

          
          </Col>
          <Col
            xs={24}
            md={12}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
             <Popover
              content={filterContent}
              trigger="click"
              open={open}
              onOpenChange={handleOpenChange}
              placement="bottomRight"
              arrow={false}
            >
              <Button
               shape="circle"
                style={{
                  padding: "12px 12px 5px",
                  height: "auto",
                  backgroundColor: "#7CC059",
                }}
              >
                <FaFilter style={{ fontSize: "16px", color: "white" }} />
              </Button>
            </Popover>
            &emsp;
            <Input
              style={{ width: "250px" }}
              className="mainInput dashInput"
              placeholder="Search Here"
              onChange={(e) => handleSearch(e.target.value)}
              suffix={
                <FaSearch
                  style={{
                    color: "grey",
                    fontSize: 16,
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    getUsers(1, paginationConfig.limit, filter.keyword)
                  }
                />
              }
              onPressEnter={(e) =>
                getUsers(1, paginationConfig.limit, filter.keyword)
              }
            />
           
           
          </Col>
        </Row>

        <Row style={{ padding: 20, overflow: "auto" }}>
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Skeleton active />
              <br />
            </div>
          ) : (
            <Table
              className="styledTable"
              dataSource={users}
              columns={columns}
              pagination={false}
            />
          )}
        </Row>
        <Row style={{ padding: "10px 20px" }}>
          <Col xs={24} md={12}>
            <p  className="fontFamily1" style={{color:"#999"}}>{message}</p>
          </Col>
          <Col
            xs={24}
            md={12}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Pagination
              className="styledPagination"
              onChange={(e) => handlePageChange(e)}
              current={parseInt(paginationConfig.pageNumber)}
              pageSize={paginationConfig.limit}
              total={paginationConfig.totalDocs}
              itemRender={itemRender}
            />
          </Col>
        </Row>
        <br />
      </div>
     
   

              
             
            </Card>
          </div>
        </Col>
      </Row>

      
      <Modal
        visible={modalOpen}
        onOk={() => handleStatus()}
        onCancel={() => setModalOpen(false)}
        okText="Yes"
        className="StyledModal"
        style={{
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
        cancelText="No"
        cancelButtonProps={{
          style: {
            border: "2px solid #385790",
            color: "#385790",
            height: "auto",
            padding: "6px 35px",
            borderRadius: "50px",
            fontSize: "16px",
            marginTop: "15px",
          },
        }}
        okButtonProps={{
          style: {
            backgroundColor: "#385790",
            color: "white",
            marginTop: "15px",
            height: "auto",
            padding: "5px 35px",
            borderRadius: "50px",
            fontSize: "16px",
            border: "2px solid #385790",
          },
        }}
      >
        <Image
          src="./images/question.png"
          preview={false}
          width={100}
          height={120}
        />
        <Typography.Title level={4} style={{ fontSize: "25px" }}>
          {selectedUser?.isActive ? "Deactivate" : "Activate"}
        </Typography.Title>
        <Typography.Text style={{ fontSize: 16 }}>
        Do You Want To  {selectedUser?.isActive ? "Deactivate" : "Activate"} This User?
        </Typography.Text>
      </Modal>
    </Layout>
  );
}

export default PaymentLogs;
