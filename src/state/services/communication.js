import api from './api'

class CommunicationService {
  fetchCommunication = async () => {

    return api.post(`?busList%5Btram%5D%5B%5D=0l`)
  }
}

export default new CommunicationService()
