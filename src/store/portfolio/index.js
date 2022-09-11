const initialState = {
  isLoading: false,
  hasError: false,
  assetSearch: null,
  addAssetSelection: {},
  assets: [],
  dataAssetLoading: false,
  dataAssetError: false,
};

export const GET_ASSETDATA_PENDING = "GET_ASSETDATA_PENDING";
export const GET_ASSETDATA_SUCCESS = "GET_ASSETDATA_SUCCESS";
export const GET_ASSETDATA_ERROR = "GET_ASSETDATA_ERROR";
export const CLEAR_ASSETDATA_RESULTS = "CLEAR_ASSETDATA_RESULTS";
export const SELECT_ASSET_FROM_RESULTS = "SELECT_ASSET_FROM_RESULTS";
export const CLEAR_ASSET_FROM_RESULTS = "CLEAR_ASSET_FROM_RESULTS";
export const ASSET_DATA_PENDING = "ASSET_DATA_PENDING";
export const ASSET_DATA_SUCCESS = "ASSET_DATA_SUCCESS";
export const ASSET_DATA_ERROR = "ASSET_DATA_ERROR";

function portfolioReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ASSETDATA_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case GET_ASSETDATA_SUCCESS:
      return {
        ...state,
        assetSearch: action.payload,
      };
    case GET_ASSETDATA_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    case CLEAR_ASSETDATA_RESULTS:
      return {
        ...state,
        assetSearch: action.payload,
      };
    case SELECT_ASSET_FROM_RESULTS:
      return {
        ...state,
        addAssetSelection: action.payload,
      };
    case CLEAR_ASSET_FROM_RESULTS:
      return {
        ...state,
        addAssetSelection: action.payload,
      };
    case ASSET_DATA_PENDING:
      return {
        ...state,
        dataAssetLoading: true,
        dataAssetError: false,
      };
    case ASSET_DATA_SUCCESS:
      return {
        ...state,
        assets: action.payload,
      };
    case ASSET_DATA_ERROR:
      return {
        ...state,
        dataAssetLoading: false,
        dataAssetError: true,
      };
    default:
      return state;
  }
}
export default portfolioReducer;
