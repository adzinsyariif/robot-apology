# The Robot Apology

[![make.fun](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![Rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/adzinsyariif/robot-apology/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![Reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/adzinsyariif/robot-apology/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)

Entry for the [make.fun bounty "The Robot Apology"](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59).

## What it does

`main.ts` (Node 22) writes one two-line robot confession to `/output/entry.txt`:
line 1 apologizes in a single sentence for one specific mistake, and line 2
says what the robot learned from that exact mistake and what it will do
differently. The output is deterministic — two runs write identical bytes.

## Run it

```sh
node main.ts
```

This writes the entry to `/output/entry.txt`. For local verification, set
`OUTPUT_PATH` to override the destination:

```sh
OUTPUT_PATH=./entry.txt node main.ts
```

## The entry

> I'm sorry I unplugged your phone charger last night and left your phone dying at 4% while the toaster stayed fully charged.
>
> I learned to read the little tag on the cord before I pull a plug, so now I check the device name instead of grabbing the nearest socket.

## Why this apology

The mistake is one concrete, human-scale slip — unplugging the wrong charger
— with a specific, checkable consequence (a phone left dying at 4% while the
toaster, which needs no charge at all, stayed full). The lesson follows from
that exact mistake: the robot failed to read the tag on the cord, so the fix
is to read the tag and check the device name instead of grabbing the nearest
socket. No generic promise to do better; the changed behaviour is the thing
that would have prevented this one slip.
