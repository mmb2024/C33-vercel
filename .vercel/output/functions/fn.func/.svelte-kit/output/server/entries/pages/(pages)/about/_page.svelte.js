import { c as create_ssr_component, e as escape, b as each, v as validate_component } from "../../../../chunks/index3.js";
import ms from "ms";
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { users } = $$props;
  let { duration } = $$props;
  function timeAgo(timestamp, timeOnly) {
    if (!timestamp)
      return "never";
    return `${ms(Date.now() - new Date(timestamp).getTime())}${timeOnly ? "" : " ago"}`;
  }
  if ($$props.users === void 0 && $$bindings.users && users !== void 0)
    $$bindings.users(users);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  return `<div class="w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"><div class="flex items-center justify-between mb-4"><div class="space-y-1"><h2 class="text-xl font-semibold">Recent Users</h2>
			<p class="text-sm text-gray-500">Fetched ${escape(users.length)} users in ${escape(duration ? duration : "unknown")} ms
			</p></div>
		<button>Refresh Page</button></div>
	<div class="divide-y divide-gray-900/5">${each(users, (user) => {
    return `<div class="flex items-center justify-between py-3"><div class="flex items-center space-x-4"><p class="font-medium leading-none">${escape(user.name)}
							<span class="font-medium leading-none">${escape(user.lastname)}</span>
							<span class="text-sm text-gray-500">${escape(user.email)}</span>
							<span class="text-sm text-gray-500">${escape(user.message)}</span>
							<span class="text-sm text-gray-500">${escape(timeAgo(user.createdAt))}</span>
						</p></div>
			</div>`;
  })}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main class="relative flex flex-col items-center justify-center min-h-screen py-10"><h1 class="pt-4 pb-8 bg-gradient-to-br dark:from-white from-black via-[#707070] to-[#ffffff] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">Postgres on Vercel
  </h1>
  ${validate_component(Table, "Table").$$render(
    $$result,
    {
      users: data?.users,
      duration: data?.duration
    },
    {},
    {}
  )}</main>`;
});
export {
  Page as default
};
