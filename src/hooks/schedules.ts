import api from "@/lib/axios";

export const getSchedules = async () => {
  const response = await api.get("/schedule/get-schedules");
  return response.data;
};
