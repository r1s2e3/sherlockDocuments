const endpoints = {
  tokenAuth: '/api-token-auth/', // (POST) + data: username + password,
  uploadFile: '/ocr/document', // (POST) + data: file
  allDocuments: '/ocr/document/' // (GET) + id of document
}

export default endpoints
