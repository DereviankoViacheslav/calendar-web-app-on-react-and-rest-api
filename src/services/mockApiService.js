export default class MockApiService {
  baseUrl = 'https://5e300c25576f9d0014d63ac2.mockapi.io/api/v1/listEvents';

  restApi = async (method, event, id) => {
    let url = this.baseUrl;
    let configObjectMethod = {};

    switch (method) {
      case 'DELETE':
        configObjectMethod = { method: 'DELETE' };
        url += `/${id}`;
        break;
      case 'POST':
        configObjectMethod = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json;charset=utf-8', },
          body: JSON.stringify(event),
        };
        break;
      case 'PUT':
        configObjectMethod = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json;charset=utf-8', },
          body: JSON.stringify(event),
        };
        url += `/${id}`;
        break;
      default:
        configObjectMethod = null;
        break;
    }

    const res = await fetch(url, configObjectMethod);
    if (res.ok) return await res.json();
    throw new Error(`Could not fetch, received ${res.status}`);
  }

  getEvents = async () => {
    return await this.restApi();
  };

  addEvent = async (event) => {
    return await this.restApi('POST', event);
  }

  deleteEvent = async (id) => {
    return await this.restApi('DELETE', null, id);
  }

  editEvent = async ({ id, ...newEvent }) => {
    const events = await this.getEvents();
    const oldEvent = events.find((e) => e.id === id);
    const event = { ...oldEvent, ...newEvent };
    return await this.restApi('PUT', event, event.id);
  }
}