### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: ben1337, FaNg, ogwizard, viz, Walco<br />
Global Rank: [107](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [26]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  515.3<br />
<br />
Final Rank Value (515.3) = Starting Rank Value (498.4) + Head To Head Adjustments (16.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.162[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.005[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 498.4
- 400 + ( ( 0.042 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 498.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      351 | 2025-02-10 | MIGHT                | L   | 0.453      | -            | -                | -                | -         |    -7.35 | ben1337, FaNg, ogwizard, viz, Walco    |
|            9 |      395 | 2025-02-09 | Chicken Coop Esports | W   | 0.446      | 0.143        | 0.001 (0.000)    | 0.080 (0.005)    | 0 (0.000) |     7.59 | ben1337, FaNg, ogwizard, viz, Walco    |
|            8 |      420 | 2025-02-08 | Akimbo Esports       | W   | 0.440      | 0.143        | 0.000 (0.000)    | 0.080 (0.005)    | 0 (0.000) |     4.94 | ben1337, FaNg, ogwizard, viz, Walco    |
|            7 |      424 | 2025-02-08 | Chill Guys           | W   | 0.440      | 0.143        | 0.000 (0.000)    | 0.161 (0.010)    | 0 (0.000) |     5.05 | ben1337, FaNg, ogwizard, viz, Walco    |
|            6 |      443 | 2025-02-08 | MIGHT                | W   | 0.439      | 0.143        | 0.000 (0.000)    | 0.253 (0.016)    | 0 (0.000) |     6.95 | ben1337, FaNg, ogwizard, viz, Walco    |
|            5 |      842 | 2024-12-15 | NRG                  | L   | 0.072      | -            | -                | -                | -         |    -0.52 | ben1337, FaNg, Infinite, ogwizard, viz |
|            4 |      863 | 2024-12-14 | FLUFFY AIMERS        | W   | 0.066      | 0.303        | 0.000 (0.000)    | 0.011 (0.000)    | 0 (0.000) |     0.80 | ben1337, FaNg, Infinite, ogwizard, viz |
|            3 |      974 | 2024-12-07 | FLUFFY AIMERS        | L   | 0.021      | -            | -                | -                | -         |    -0.40 | ben1337, FaNg, Infinite, ogwizard, viz |
|            2 |      983 | 2024-12-07 | Nouns Esports        | L   | 0.019      | -            | -                | -                | -         |    -0.29 | ben1337, FaNg, Infinite, ogwizard, viz |
|            1 |     1009 | 2024-12-06 | Take Flyte Kings     | W   | 0.013      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.013) |     0.15 | ben1337, FaNg, Infinite, ogwizard, viz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
