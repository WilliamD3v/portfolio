import api from "@/lib/axios";

export const getSchedules = async () => {
  const response = await api.get("/schedule/get-schedules");
  return response.data;
};

export async function getApprovedSchedules() {
  const { data } = await api.get("/schedule/approved");
  return data.schedules;
}

export async function getPendingSchedules() {
  const { data } = await api.get("/schedule/pending");
  return data.schedules;
}