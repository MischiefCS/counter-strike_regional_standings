### Roster Details<br />
Team Name: Exceritus<br />
Roster: Antuanette, BabyRage, SJR, Slayerhz, zockie<br />
Global Rank: [198](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [53]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  625.8<br />
<br />
Final Rank Value (625.8) = Starting Rank Value (615.2) + Head To Head Adjustments (10.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.220[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.113<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 615.2
- 400 + ( ( 0.113 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 615.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      291 | 2025-02-13 | NRG                       | L   | 1.000      | -            | -                | -                | -         |    -2.94 | Antuanette, BabyRage, SJR, Slayerhz, zockie |
|            8 |      349 | 2025-02-10 | Chill Guys                | W   | 1.000      | 0.331        | 0.002 (0.001)    | 0.173 (0.057)    | 0 (0.000) |    17.10 | Antuanette, BabyRage, SJR, Slayerhz, zockie |
|            7 |      355 | 2025-02-10 | InControl                 | W   | 1.000      | 0.331        | 0.001 (0.000)    | 0.075 (0.025)    | 0 (0.000) |    15.99 | Antuanette, BabyRage, SJR, Slayerhz, zockie |
|            6 |      392 | 2025-02-09 | FlyQuest RED              | W   | 1.000      | 0.331        | 0.007 (0.002)    | 0.052 (0.017)    | 0 (0.000) |    16.81 | Antuanette, BabyRage, SJR, Slayerhz, zockie |
|            5 |      440 | 2025-02-08 | Chill Guys                | L   | 1.000      | -            | -                | -                | -         |   -13.01 | Antuanette, BabyRage, SJR, Slayerhz, zockie |
|            4 |      839 | 2024-12-15 | Nitro.GG                  | L   | 0.695      | -            | -                | -                | -         |    -8.88 | Antuanette, BabyRage, SJR, Slayerhz, zockie |
|            3 |      865 | 2024-12-14 | 9z Academy                | L   | 0.687      | -            | -                | -                | -         |   -13.69 | Antuanette, BabyRage, SJR, Slayerhz, zockie |
|            2 |     2903 | 2024-09-13 | Undefined (American team) | L   | 0.075      | -            | -                | -                | -         |    -1.21 | Antuanette, BabyRage, SJR, Slayerhz, zockie |
|            1 |     2965 | 2024-09-11 | Orbital vsat online       | W   | 0.062      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.45 | Antuanette, BabyRage, SJR, Slayerhz, zockie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($96.35)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.128 | $750.00        | $96.35          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
