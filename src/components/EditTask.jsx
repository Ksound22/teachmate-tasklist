// EditTask.js
import { useState, useEffect } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTaskItem } from '../../provider/redux/taskSlice';

const EditTask = ({ task, show, handleClose }) => {
  const [editedTask, setEditedTask] = useState({ ...task });
  const dispatch = useDispatch();

  useEffect(() => {
    setEditedTask({ ...task });
  }, [task]);

  const handleEditTask = (e) => {
    e.preventDefault();
    dispatch(editTaskItem(editedTask));

    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleEditTask}>
          <Form.Group controlId="Title" className="mb-4">
            <Form.Label>Task Title</Form.Label>
            <Form.Control
              type="text"
              required
              value={editedTask.title}
              onChange={(e) =>
                setEditedTask({ ...editedTask, title: e.target.value })
              }
            />
            <Form.Text className="text-muted">Enter task title</Form.Text>
          </Form.Group>

          <Form.Group controlId="Description" className="mb-4">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={editedTask.description}
              onChange={(e) =>
                setEditedTask({ ...editedTask, description: e.target.value })
              }
              required
            />
            <Form.Text className="text-muted">Enter task description</Form.Text>
          </Form.Group>

          <Form.Group controlId="DueDate" className="mb-4">
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              value={editedTask.dueDate}
              onChange={(e) =>
                setEditedTask({ ...editedTask, dueDate: e.target.value })
              }
              required
            />
            <Form.Text className="text-muted">Select task due date</Form.Text>
          </Form.Group>

          <Form.Group controlId="Status" className="mb-4">
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              value={editedTask.status}
              onChange={(e) =>
                setEditedTask({ ...editedTask, status: e.target.value })
              }
              required
            />
            <Form.Text className="text-muted">
              Enter Done or Not Done for task status
            </Form.Text>
          </Form.Group>

          <Button type="submit" className="mt-2">
            Update Task
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditTask;
