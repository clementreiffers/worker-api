using Workerd = import "/workerd/workerd.capnp";

const config :Workerd.Config = (
  services = [
    (name = "worker2", worker = .worker2),
  ],

  sockets = [
    (
      name = "http",
      address = "*:8081",
      http = (),
      service = "worker2"
    ),
  ],


);

const worker2 :Workerd.Worker = (
    modules = [
      (name = "worker", esModule = embed "worker2/index.ts")
    ],
  compatibilityDate = "2023-02-28",

  bindings = [
      (name = "nom", text = "$workerd_variable"),
  ],
  # Learn more about compatibility dates at:
  # https://developers.cloudflare.com/workers/platform/compatibility-dates/
);
