class SlackError {
  code: string;
  message: string;
}

export class SlackErrStrategy {
  static getError(api: SlackAPI, code: string): SlackError {
    const error = new SlackError();
    error.code = code.toUpperCase();

    switch (api) {
      case SlackAPI.INVITE:
        error.message = inviteErrMap.get(code);
        break;
      case SlackAPI.KICK:
        error.message = kickErrMap.get(code);
        break;
      default:
        throw new Error('Unimplemented');
    }
    return error;
  }
}

export enum SlackAPI {
  INVITE,
  KICK,
}

export const inviteErrMap: Map<string, string> = new Map([
  ['already_in_channel', `This channel was connected to another project.`], // self defined
  ['cant_invite', `User cannot be invited to this channel.`],
  ['cant_invite_self', `Authenticated user cannot invite themselves to a channel.`],
  ['channel_not_found', `Value passed for channel was invalid.`],
  [
    'invitee_cant_see_channel',
    `The Grid multi-workspace channel you are inviting a user to is not shared with any workspaces the user is currently a member of.`,
  ],
  ['is_archived', `The channel has been archived.`],
  [
    'org_user_not_in_team',
    `One or more members invited are part of the Enterprise Grid organization but not the specific workspace you're interfacing with.`,
  ],
  ['method_not_supported_for_channel_type', `This type of conversation cannot be used with this method.`],
  ['missing_scope', `The token used is not granted the specific scope permissions required to complete this request.`],
  [
    'no_permission',
    `The workspace token used in this request does not have the permissions necessary to complete the request. Make sure your app is a member of the conversation it's attempting to post a message to.`,
  ],
  ['no_user', `No value was passed for users.`],
  ['not_in_channel', `Authenticated user is not in the channel.`],
  [
    'ura_max_channels',
    `An invited user is a single-channel guest user ('ultra restricted access') that is already in the maximum number of conversations.`,
  ],
  ['user_is_restricted', `An invited user is a guest user that is restricted from accessing this conversation.`],
  ['user_not_found', `Value passed for users was invalid.`],
  ['access_denied', `Access to a resource specified in the request is denied.`],
  ['account_inactive', `Authentication token is for a deleted user or workspace when using a bot token.`],
  ['deprecated_endpoint', `The endpoint has been deprecated.`],
  ['ekm_access_denied', `Administrators have suspended the ability to post a message.`],
  ['enterprise_is_restricted', `The method cannot be called from an Enterprise.`],
  [
    'invalid_auth',
    `Some aspect of authentication cannot be validated. Either the provided token is invalid or the request originates from an IP address disallowed from making the request.`,
  ],
  ['is_bot', `This method cannot be called by a legacy bot.`],
  ['user_is_ultra_restricted', `This method cannot be called by a single channel guest.`],
  ['method_deprecated', `The method has been deprecated.`],
  ['not_allowed_token_type', `The token type used in this request is not allowed.`],
  ['not_authed', `No authentication token provided.`],
  [
    'org_login_required',
    `The workspace is undergoing an enterprise migration and will not be available until migration is complete.`,
  ],
  ['token_expired', `Authentication token has expired`],
  [
    'token_revoked',
    `Authentication token is for a deleted user or workspace or the app has been removed when using a user token.`,
  ],
  ['two_factor_setup_required', `Two factor setup is required.`],
  [
    'team_access_not_granted',
    `The token used is not granted the specific workspace access required to complete this request.`,
  ],
  ['accesslimited', `Access to this method is limited on the current network`],
  [
    'fatal_error',
    `The server could not complete your operation(s) without encountering a catastrophic error. It's possible some aspect of the operation succeeded before the error was raised.`,
  ],
  [
    'internal_error',
    `The server could not complete your operation(s) without encountering an error, likely due to a transient issue on our end. It's possible some aspect of the operation succeeded before the error was raised.`,
  ],
  [
    'invalid_arg_name',
    `The method was passed an argument whose name falls outside the bounds of accepted or expected values. This includes very long names and names with non-alphanumeric characters other than _. If you get this error, it is typically an indication that you have made a very malformed API call.`,
  ],
  [
    'invalid_arguments',
    `The method was either called with invalid arguments or some detail about the arguments passed is invalid, which is more likely when using complex arguments like blocks or attachments.`,
  ],
  ['invalid_array_arg', `The method was passed an array as an argument. Please only input valid strings.`],
  [
    'invalid_charset',
    `The method was called via a POST request, but the charset specified in the Content-Type header was invalid. Valid charset names are: utf-8 iso-8859-1.`,
  ],
  [
    'invalid_form_data',
    `The method was called via a POST request with Content-Type application/x-www-form-urlencoded or multipart/form-data, but the form data was either missing or syntactically invalid.`,
  ],
  [
    'invalid_post_type',
    `The method was called via a POST request, but the specified Content-Type was invalid. Valid types are: application/json application/x-www-form-urlencoded multipart/form-data text/plain.`,
  ],
  [
    'missing_post_type',
    `The method was called via a POST request and included a data payload, but the request did not include a Content-Type header.`,
  ],
  ['ratelimited', `The request has been rate limited. Refer to the Retry-After header for when to retry the request.`],
  ['request_timeout', `The method was called via a POST request, but the POST data was either missing or truncated.`],
  ['service_unavailable', `The service is temporarily unavailable`],
  [
    'team_added_to_org',
    `The workspace associated with your request is currently undergoing migration to an Enterprise Organization. Web API and other platform operations will be intermittently unavailable until the transition is complete.`,
  ],
]);

export const kickErrMap: Map<string, string> = new Map([
  ['cant_kick_from_general', `User cannot be removed from #general.`],
  ['cant_kick_self', `Authenticated user can't kick themselves from a channel.`],
  ['channel_not_found', `Value passed for channel was invalid.`],
  ['method_not_supported_for_channel_type', `This type of conversation cannot be used with this method.`],
  ['missing_scope', `The token used is not granted the specific scope permissions required to complete this request.`],
  ['not_in_channel', `User was not in the channel.`],
  ['not_supported', `This is not supported for this channel and user combination.`],
  ['restricted_action', `A team preference prevents the authenticated user from kicking.`],
  ['user_not_found', `Value passed for user was invalid.`],
  ['access_denied', `Access to a resource specified in the request is denied.`],
  ['account_inactive', `Authentication token is for a deleted user or workspace when using a bot token.`],
  ['deprecated_endpoint', `The endpoint has been deprecated.`],
  ['ekm_access_denied', `Administrators have suspended the ability to post a message.`],
  ['enterprise_is_restricted', `The method cannot be called from an Enterprise.`],
  [
    'invalid_auth',
    `Some aspect of authentication cannot be validated. Either the provided token is invalid or the request originates from an IP address disallowed from making the request.`,
  ],
  ['is_bot', `This method cannot be called by a legacy bot.`],
  ['user_is_restricted', `This method cannot be called by a restricted user or single channel guest.`],
  ['method_deprecated', `The method has been deprecated.`],
  ['not_allowed_token_type', `The token type used in this request is not allowed.`],
  ['not_authed', `No authentication token provided.`],
  [
    'no_permission',
    `The workspace token used in this request does not have the permissions necessary to complete the request. Make sure your app is a member of the conversation it's attempting to post a message to.`,
  ],
  [
    'org_login_required',
    `The workspace is undergoing an enterprise migration and will not be available until migration is complete.`,
  ],
  ['token_expired', `Authentication token has expired`],
  [
    'token_revoked',
    `Authentication token is for a deleted user or workspace or the app has been removed when using a user token.`,
  ],
  ['two_factor_setup_required', `Two factor setup is required.`],
  [
    'team_access_not_granted',
    `The token used is not granted the specific workspace access required to complete this request.`,
  ],
  ['accesslimited', `Access to this method is limited on the current network`],
  [
    'fatal_error',
    `The server could not complete your operation(s) without encountering a catastrophic error. It's possible some aspect of the operation succeeded before the error was raised.`,
  ],
  [
    'internal_error',
    `The server could not complete your operation(s) without encountering an error, likely due to a transient issue on our end. It's possible some aspect of the operation succeeded before the error was raised.`,
  ],
  [
    'invalid_arg_name',
    `The method was passed an argument whose name falls outside the bounds of accepted or expected values. This includes very long names and names with non-alphanumeric characters other than _. If you get this error, it is typically an indication that you have made a very malformed API call.`,
  ],
  [
    'invalid_arguments',
    `The method was either called with invalid arguments or some detail about the arguments passed is invalid, which is more likely when using complex arguments like blocks or attachments.`,
  ],
  ['invalid_array_arg', `The method was passed an array as an argument. Please only input valid strings.`],
  [
    'invalid_charset',
    `The method was called via a POST request, but the charset specified in the Content-Type header was invalid. Valid charset names are: utf-8 iso-8859-1.`,
  ],
  [
    'invalid_form_data',
    `The method was called via a POST request with Content-Type application/x-www-form-urlencoded or multipart/form-data, but the form data was either missing or syntactically invalid.`,
  ],
  [
    'invalid_post_type',
    `The method was called via a POST request, but the specified Content-Type was invalid. Valid types are: application/json application/x-www-form-urlencoded multipart/form-data text/plain.`,
  ],
  [
    'missing_post_type',
    `The method was called via a POST request and included a data payload, but the request did not include a Content-Type header.`,
  ],
  ['ratelimited', `The request has been ratelimited. Refer to the Retry-After header for when to retry the request.`],
  ['request_timeout', `The method was called via a POST request, but the POST data was either missing or truncated.`],
  ['service_unavailable', `The service is temporarily unavailable`],
  [
    'team_added_to_org',
    `The workspace associated with your request is currently undergoing migration to an Enterprise Organization. Web API and other platform operations will be intermittently unavailable until the transition is complete.`,
  ],
]);
