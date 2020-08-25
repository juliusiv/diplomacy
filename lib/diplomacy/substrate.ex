defmodule Substrate.Registry do
  defmacro __using__(controller_entries, alias) do
    quote do
      for entry <- controller_entries do
        scope unquote(entry.prefix), unquote(alias) do
          unquote(entry.method) unquote(entry.path), unquote(entry.module), unquote(entry.handler)
        end
      end
    end
  end

  @doc """
  Creates a function that registers 
  """
  defmacro registry(opts) do
    {name, opts} = Keyword.pop(opts, :name, :registry)
    {prefix, opts} = Keyword.pop(opts, :prefix, "")
    {alias, opts} = Keyword.pop(opts, :alias, "")

    quote do
      def registry_handles(opts) do
        
      end
    end
  end
end
