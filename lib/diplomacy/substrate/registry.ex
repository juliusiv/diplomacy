defmodule Substrate.Registry do
  defmacro __using__(opts) do
    {prefix, opts} = Keyword.pop(opts, :prefix, "")
    {alias, opts} = Keyword.pop(opts, :alias, "")

    quote do
      use Substrate.Controller

      # def handles
    end

    # defmacro handles(opts) do
    #   # path = Keyword.fetch!(opts, :path)
    #   # method = Keyword.fetch!(opts, :method)
    #   path = "/users/register"
    #   method = :post

    #   # get the function this applies to
    #   func_name = :register_user

    #   substrate_registry_definition = %{
    #     prefix: prefix,
    #     method: method,
    #     alias: alias,
    #     path: path
    #   }

    #   # handler = generate_handler(substrate_registry_definition, controller_func)

    #   quote do
    #     @doc """
    #     A generated function that defines a macro that generates the Phoenix.Router entry for this
    #     handler function.
    #     """
    #     IO.inspect(unquote(func_name))
    #     def entry(func_name) do
    #       post unquote(path), unquote(alias), func_name
    #       # unquote(method) unquote(path), unquote(alias), func_name
    #     end
    #   end
    # end
  end

  defp generate_handler(substrate_registry_definition, controller_func) do
    controller_func
  end

  # defmacro generate_handler(substrate_registry_definition, func_name) do
  #   # macro code
  #   def entry(:func_name) do
      
  #   end
  # end

  # @doc """
  # Creates a function that registers 
  # """
  # defmacro registry(opts) do
  #   {name, opts} = Keyword.pop(opts, :name, :registry)
  #   {prefix, opts} = Keyword.pop(opts, :prefix, "")
  #   {alias, opts} = Keyword.pop(opts, :alias, "")

  #   quote do
  #     def registry_handles(opts) do
        
  #     end
  #   end
  # end

  @doc """
  Mostly just a helper make it nice to define entries.
  """
  defmacro collect_all(do_block) do
    quote do
      import Substrate.Registry, only: [entry: 2]
      unquote(do_block)
    end
  end

  @doc """
  Create a scope with one path entry for each registered handler.
  """
  defmacro entry(module, function_name) do
    module = Macro.expand(module, __CALLER__)
    %{method: method, path: path} = module.entry(function_name)

    quote do
      # Creating a scope for each endpoint is a bit redundant but it makes a nice sandbox for
      # each handler.
      scope "/" do
        unquote(method)(unquote(path), unquote(module), unquote(function_name))
      end
    end
  end
end
