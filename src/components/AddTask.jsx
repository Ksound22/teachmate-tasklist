import { useState } from 'react';
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTaskItem } from '../../provider/redux/taskSlice';
import { FaPlus } from 'react-icons/fa';

const AddTask = () => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: '',
  });
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();

    if (taskData.status !== 'Done' && taskData.status !== 'Not Done') {
      alert('Status must either be "Done" or "Not Done" ');
    } else {
      dispatch(addTaskItem(taskData));
    }

    setTaskData({
      title: '',
      description: '',
      dueDate: '',
      status: '',
    });
  };

  const handleClose = () => {
    if (
      taskData.title.trim() === '' ||
      taskData.description.trim() === '' ||
      taskData.dueDate.trim() === '' ||
      taskData.status.trim() === ''
    ) {
      alert('Please fill in all required fields');
    } else {
      setShow(false);
    }
  };

  const handleCancel = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <Button variant="primary" onClick={handleShow} className="mt-3">
            Add Task <FaPlus />
          </Button>

          <Modal show={show} onHide={handleCancel} centered>
            <Modal.Header closeButton>
              <Modal.Title>Add Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleAddTask}>
                <Form.Group controlId="Title" className="mb-4">
                  <Form.Label>Task Title</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    value={taskData.title}
                    onChange={(e) =>
                      setTaskData({ ...taskData, title: e.target.value })
                    }
                  />
                  <Form.Text className="text-muted">Enter task title</Form.Text>
                </Form.Group>

                <Form.Group controlId="Description" className="mb-4">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    value={taskData.description}
                    onChange={(e) =>
                      setTaskData({ ...taskData, description: e.target.value })
                    }
                    required
                  />
                  <Form.Text className="text-muted">
                    Enter task description
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="DueDate" className="mb-4">
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={taskData.dueDate}
                    onChange={(e) =>
                      setTaskData({ ...taskData, dueDate: e.target.value })
                    }
                    required
                  />
                  <Form.Text className="text-muted">
                    Select task due date
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="Status" className="mb-4">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type="text"
                    value={taskData.status}
                    onChange={(e) =>
                      setTaskData({ ...taskData, status: e.target.value })
                    }
                    required
                  />
                  <Form.Text className="text-muted">
                    Enter Done or Not Done for task status
                  </Form.Text>
                </Form.Group>

                <div className="d-flex align-items-center justify-content-center gap-3">
                  <Button type="submit" className="mt-2" onClick={handleClose}>
                    Add Task
                  </Button>
                  <Button
                    variant="secondary"
                    className="mt-2"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default AddTask;
