import api from '../api';

// Get all user activities (for admin)
export const getUserActivities = async () => {
  const response = await api.get('/users/activities');
  return response.data;
};

// Get all leave requests (for admin/academic)
export const getLeaveRequests = async () => {
  const response = await api.get('/leaves');
  return response.data;
};

// Approve a leave request by ID
export const approveLeave = async (leaveId) => {
  const response = await app.js(`/leaves/${leaveId}/approve`);
  return response.data;
};

// Reject a leave request by ID
export const rejectLeave = async (leaveId) => {
  const response = await api.post(`/leaves/${leaveId}/reject`);
  return response.data;
};