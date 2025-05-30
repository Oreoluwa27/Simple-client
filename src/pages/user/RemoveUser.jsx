import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";

import Layout from "../../components/layout/Layout";

function RemoveUser() {
  const DELAY_BEFORE_REDIRECTION = 1000;
  const { userId } = useParams();
  const RemoveUserEndPoint = `http://backend-service.default.svc.cluster.local:80/v1/user/${userId}`;

  const removeUser = async () => {
    try {
      const {
        data: { status, message },
      } = await axios.delete(RemoveUserEndPoint);
      if (status === "OK") {
        console.log("q");
        console.log(message);
        toast.success(message);
      } else {
        console.log("e");
        console.log(message);
        toast.warn(message);
      }
      setTimeout(() => {
        window.location.href = "/";
      }, DELAY_BEFORE_REDIRECTION);
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const cancelAction = () => {
    window.location.href = "/";
  };

  return (
    <Layout>
      <h2 className="text-center">Are you sure you want to delete user?</h2>
      <div className="text-center">
        <Button variant="danger" onClick={removeUser}>
          Yes
        </Button>
        <Button variant="primary" onClick={cancelAction} className="m-4">
          No
        </Button>{" "}
      </div>
    </Layout>
  );
}

export default RemoveUser;
