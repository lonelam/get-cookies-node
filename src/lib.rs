#![deny(clippy::all)]

use napi::bindgen_prelude::*;
use napi_derive::napi;
#[cfg(target_os = "windows")]
#[napi]
pub async fn get_cookie_until_contains(input: String, matcher: String) -> Result<String> {
  use get_cookies::read_cookie_until;

  read_cookie_until(&input, move |cookie_str| cookie_str.contains(&matcher))
    .await
    .map_err(|e| {
      // Convert your error to `napi::Error` here
      napi::Error::new(
        napi::Status::GenericFailure,
        format!("Error reading cookie: {}", e),
      )
    })
}

#[cfg(any(target_os = "macos", target_os = "linux"))]
#[napi]
pub fn get_cookie_until_contains(input: String, matcher: String) -> Result<String> {
  use get_cookies::read_cookie_until_sync;

  read_cookie_until_sync(&input, move |cookie_str| {
    // #[cfg(debug_assertions)]
    println!(
      "The latest cookies are {}, matching {}",
      cookie_str, matcher
    );
    cookie_str.contains(&matcher)
  })
  .map_err(|e| {
    // Convert your error to `napi::Error` here
    napi::Error::new(
      napi::Status::GenericFailure,
      format!("Error reading cookie: {}", e),
    )
  })
}
