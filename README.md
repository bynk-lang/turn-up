# Turn up

The code for [*Build it with Bynk*](https://bynk-lang.org/blog/series/build-it/),
a tutorial series on the Bynk blog that builds one small service step by step,
from an empty folder to a live deployment.

*Turn up* is an event sign-up service. An organiser creates an event with a
limited number of places, people sign up over HTTP, a full event keeps a
waiting list, everyone gets an email when they're in and a reminder the day
before, and the whole thing deploys to Cloudflare Workers.

## One folder per part

Each folder is the complete project as it stands at the **end** of one part,
so a post's code always matches its folder, even after later parts change it.
To follow a part, start from the previous part's folder.

| Part | Folder | What it adds |
|---|---|---|
| 1 | [`01-an-event`](01-an-event/) | `bynk new`, a `Gathering` record, refined `Capacity` and `Title`, a first test suite |

The rest arrive as the series is written: open the door (HTTP), who's coming
(an agent), only the organiser (actors), a waiting list, email, reminders,
idempotency, and shipping it.

## Names

In the posts, an *event* is the thing people sign up for. In the code it's a
`Gathering`, because Bynk has events of its own (messages between contexts),
which Turn up uses from part 6.

## Running it

Install Bynk (the version in [`BYNK_VERSION`](BYNK_VERSION)), then:

```sh
cd 01-an-event
bynk test
```

From the root, `bynk check .` and `bynk test` run every part. CI runs
`bynk fmt --check`, `bynk check` and `bynk test` on each folder at the pinned
version, and the Bynk canary re-runs them on each new release.

## Licence

Dual-licensed under [Apache 2.0](LICENSE-APACHE) or [MIT](LICENSE-MIT), at your
option.
