const host = "https://webtv-6g10tti967269c07-1254317835.ap-shanghai.app.tcloudbase.com"
const version = "v1"
const versionDetail = "1.1.0"
module.exports = {
    host,
    channels: `${host}/${version}/channels`,
    details: `${host}/${version}/details`,
    sources: `${host}/${version}/sources`,
    version,
    list: `${host}/${version}/list`,
    versionDetail
}
