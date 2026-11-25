# Part 1: An event, and the rules it keeps

The project as it stands at the end of part 1 of *Build it with Bynk*.

- `bynk new turn-up --name turnup` made `bynk.toml`, `.gitignore`,
  `.gitattributes` and `src/turnup.bynk` (a "hello" HTTP service, left as it
  is until part 2).
- [`src/gatherings.bynk`](src/gatherings.bynk): a commons with the refined
  types `Capacity` (1 to 500) and `Title` (3 to 80 characters), the
  `Gathering` record, `gathering(…)` to build one from unchecked values, and
  `smallRoom()`, a literal checked when it compiles.
- [`tests/gatherings.bynk`](tests/gatherings.bynk): the suite.

```sh
bynk check .
bynk test
```

Change `smallRoom()`'s `12` to `0` and `bynk check .` reports
`bynk.refine.literal_violates`.
