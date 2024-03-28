#![deny(clippy::all)]

use napi::bindgen_prelude::*;
use napi_derive::napi;
use get_cookies::read_cookie;

#[napi]
pub async fn get_cookies(input: String) -> Result<String> {
    read_cookie(&input).await.map_err(|e| {
        // Convert your error to `napi::Error` here
        napi::Error::new(napi::Status::GenericFailure, format!("Error reading cookie: {}", e))
    })
}