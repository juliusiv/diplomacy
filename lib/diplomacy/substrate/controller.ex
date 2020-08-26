defmodule Substrate.Controller do
  @moduledoc """
  Used within a controller file to make sense of @doc annotations that spec a handler.
  """

  alias Substrate.Entry

  defmacro __using__(_opts) do
    quote do
      @doc """
      A function to retrieve the handler's definition from its @doc.
      """
      # @spec entry(atom()) :: Substrate.Entry.t()
      # def entry(name),
      #   do: unquote(__MODULE__).__substrate_handler__(__MODULE__, name)
      def entry(name),
        do: unquote(__MODULE__).__substrate_handler__(__MODULE__, name)

      defoverridable entry: 1
    end
  end

  @doc false
  # @spec __substrate_handler__(module(), atom()) :: Entry.t() | nil
  def __substrate_handler__(module, name) do
    IO.inspect("doot")
    IO.inspect(Code.fetch_docs(module))
    %Entry{
      method: :post,
      path: "/api/users/register",
      # alias: DiplomacyWeb,
      # func: :register_user
    }
    # with {:ok, {mod_meta, summary, description, meta}} <- get_docs(module, name) do
    #   %Entry{
    #     method: :post,
    #     path: "/users/register"
    #   }
    # else
    #   _ -> nil
    # end
  end

  defp get_docs(module, name) do
    {:docs_v1, _anno, _lang, _format, _module_doc, mod_meta, mod_docs} = Code.fetch_docs(module)

    doc_for_function =
      Enum.find(mod_docs, fn
        {{:function, ^name, _}, _, _, _, _} -> true
        _ -> false
      end)

    case doc_for_function do
      {_, _, _, docs, meta} when is_map(docs) ->
        description = Map.get(docs, "en", "")
        [summary | _] = String.split(description, ~r/\n\s*\n/, parts: 2)

        {:ok, {mod_meta, summary, description, meta}}

      {_, _, _, :none, %{responses: _responses} = meta} ->
        summary = ""
        description = ""
        {:ok, {mod_meta, summary, description, meta}}

      {_, _, _, :none, %{}} ->
        IO.warn("No docs found for function #{module}.#{name}/2")

      {_, _, _, :hidden, %{}} ->
        nil

      _ ->
        IO.warn("Invalid docs declaration found for function #{module}.#{name}/2")
        nil
    end
  end
end
