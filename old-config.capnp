using Workerd = import "/workerd/workerd.capnp";

const config :Workerd.Config = (
  services = [
    (name = "main", worker = .mainWorker),
    (name = "worker2", worker = .worker2),
  ],

  sockets = [
    # Serve HTTP on port 8080.
    ( name = "http",
      address = "*:8080",
      http = (),
      service = "main"
    ),
    (
      name = "http",
      address = "*:8081",
      http = (),
      service = "worker2"
    ),
  ]
);

const mainWorker :Workerd.Worker = (
    modules = [
      (name = "worker", esModule = embed "build/index.js")
    ],
  compatibilityDate = "2023-02-28",
  # Learn more about compatibility dates at:
  # https://developers.cloudflare.com/workers/platform/compatibility-dates/
);

const worker2 :Workerd.Worker = (
    modules = [
      (name = "worker", esModule = embed "worker2/index.js")
    ],
  compatibilityDate = "2023-02-28",
  # Learn more about compatibility dates at:
  # https://developers.cloudflare.com/workers/platform/compatibility-dates/
);