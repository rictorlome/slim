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
    session_code = 'session_number_' + message.id.to_s
    key_file = 'slimbot-420bc02053ca.json'
    session_client = Google::Cloud::Dialogflow::V2::Sessions.new credentials: key_file
    formatted_session = Google::Cloud::Dialogflow::V2::SessionsClient.session_path('slimbot-e6c6a', session_code)
    last_message = message.body
    query_text = Google::Cloud::Dialogflow::V2::TextInput.new text: last_message, language_code: 'en'
    query_input = Google::Cloud::Dialogflow::V2::QueryInput.new text: query_text
    response = session_client.detect_intent(formatted_session, query_input)
    return response.query_result.fulfillment_text
  end

end
