import { useState } from 'react';
import AddTask from './AddTask';
import EditTask from './EditTask';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Button, Row, Form, Col } from 'react-bootstrap';
import { FaTrash, FaPen } from 'react-icons/fa';
import { removeTaskItem } from '../../provider/redux/taskSlice';

const Tasks = () => {
  const { tasks } = useSelector((state) => state.taskItems);
  const [selectedTask, setSelectedTask] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');

  const dispatch = useDispatch();

  const handleEditClick = (task) => {
    setSelectedTask(task);
  };

  const handleEditClose = () => {
    setSelectedTask(null);
  };

  const filteredTasks =
    statusFilter === 'all'
      ? tasks
      : tasks.filter((task) => task.status === statusFilter);

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  return (
    <Container>
      <h1 className="text-center mt-3">TeachMateAI Tasklist App</h1>
      <AddTask />

      {/* Filter Tasks based on Done or not Done*/}
      {filteredTasks.length ? (
        <Row className="d-flex align-items-center justify-content-center mt-3">
          <Col md={6}>
            <Form.Group controlId="statusFilter" className="mt-3 ">
              <Form.Label className="d-flex justify-content-center">
                <h2> Status Filter</h2>
              </Form.Label>
              <Form.Control
                as="select"
                value={statusFilter}
                onChange={handleStatusFilterChange}
              >
                <option value="all">All</option>
                <option value="Done">Done</option>
                <option value="Not Done">Not Done</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      ) : (
        ''
      )}

      {filteredTasks.length ? (
        <h2 className="text-center mt-3">Task Items</h2>
      ) : (
        ''
      )}
      <div className="d-flex gap-5 flex-wrap justify-content-center align-items-center">
        {filteredTasks.map((task) => (
          <article
            key={task.id}
            style={{ width: '18rem' }}
            className="border rounded p-3 mb-3"
          >
            <div>
              <h4>{task.title}</h4>
              <p style={{ overflow: 'auto' }}>
                <strong> Description:</strong> {task.description}
              </p>
              <p>
                <strong>Due Date:</strong> {task.dueDate}
              </p>
              <p>
                <strong> Status:</strong> {task.status}
              </p>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-3">
              <Button
                variant="danger"
                onClick={() => dispatch(removeTaskItem(task.id))}
                size="sm"
                className="mr-3"
              >
                <FaTrash />
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleEditClick(task)}
              >
                <FaPen />
              </Button>
            </div>
          </article>
        ))}
      </div>
      {selectedTask && (
        <EditTask
          task={selectedTask}
          show={!!selectedTask}
          handleClose={handleEditClose}
        />
      )}
    </Container>
  );
};

export default Tasks;
