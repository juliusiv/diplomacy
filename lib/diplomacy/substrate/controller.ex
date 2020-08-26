defmodule Substrate.Controller do
  @moduledoc """
  Used within a controller file to make sense of @doc annotations that spec a handler.
  """

  alias Substrate.Entry

  defmacro __using__(_opts) do
    quote do
      @doc false
      @spec entry(atom()) :: OpenApiSpex.Operation.t()
      def entry(name),
        do: unquote(__MODULE__).__api_operation__(__MODULE__, name)

      defoverridable entry: 1
    end
  end

  @doc false
  @spec __api_operation__(module(), atom()) :: Operation.t() | nil
  def __api_operation__(mod, name) do
    # IO.inspect(mod)
    IO.inspect(Code.fetch_docs(mod))
    %Entry{
      path: "/api/users/register",
      method: :post
    }
    # with {:ok, {mod_meta, summary, description, meta}} <- get_docs(mod, name) do
    #   %Operation{
    #     summary: summary,
    #     description: description,
    #     operationId: build_operation_id(meta, mod, name),
    #     parameters: build_parameters(meta),
    #     requestBody: build_request_body(meta),
    #     responses: build_responses(meta),
    #     security: build_security(meta),
    #     tags: Map.get(mod_meta, :tags, []) ++ Map.get(meta, :tags, [])
    #   }
    # else
    #   _ -> nil
    # end
  end
end
