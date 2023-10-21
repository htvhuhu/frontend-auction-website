import http from './HttpService';

class BidService {

  saveBid = async (bid) => {
    try {
      const res = await http.post('/bids', bid);
      return res.data;
    } catch (error) {
      return null;
    }
  }

  makeDeposit = async (bid) => {
    try {
      const res = await http.post('/bids/deposit', bid);
      return res.data;
    } catch (error) {
      return null;
    }
  }

  getMyBidHistory = async () => {
    try {
      const res = await http.get('/bids/my-history');
      return res.data;
    } catch (error) {
      return null;
    }
  }

}

const bidService = new BidService();
export default bidService;