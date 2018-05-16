require 'google/cloud/dialogflow/v2'

class QuerySlimbotJob < ApplicationJob
  queue_as :default

  def perform(message, slimbot)
    txt = response_from_dflow(message)
    slimbot_reply = slimbot.messages.new(body: txt, channel_id: message.channel_id)
    slimbot_reply.save!
  end

  private

  def response_from_dflow(message)
    k = {
      "type": "service_account",
      "project_id": ENV['dflow_project_id'],
      "private_key_id": ENV['dflow_private_key_id'],
      "private_key": ENV['dflow_private_key'],
      "client_email": ENV['dflow_client_email'],
      "client_id": ENV['dflow_client_id'],
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://accounts.google.com/o/oauth2/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/dialogflow-rpfluq%40slimbot-e6c6a.iam.gserviceaccount.com"
    }

    session_code = 'session_number_' + message.id.to_s
    session_client = Google::Cloud::Dialogflow::V2::Sessions.new credentials: k
    formatted_session = Google::Cloud::Dialogflow::V2::SessionsClient.session_path(ENV['dflow_project_id'], session_code)
    last_message = message.body
    query_text = Google::Cloud::Dialogflow::V2::TextInput.new text: last_message, language_code: 'en'
    query_input = Google::Cloud::Dialogflow::V2::QueryInput.new text: query_text
    response = session_client.detect_intent(formatted_session, query_input)
    return response.query_result.fulfillment_text
  end

end
