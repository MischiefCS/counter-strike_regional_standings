### Roster Details<br />
Team Name: Rhyno Youngsters<br />
Roster: BeiranZz, hk, ms, Ruy2k, ThozoR<br />
Global Rank: [253](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [158]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  626.2<br />
<br />
Final Rank Value (626.2) = Starting Rank Value (645.3) + Head To Head Adjustments (-19.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.048[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 645.3
- 400 + ( ( 0.126 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 645.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1128 | 2024-12-28 | The Agency Clan    | L   | 0.779      | -            | -                | -                | -         |    -9.49 | BeiranZz, hk, ms, Ruy2k, ThozoR     |
|            7 |     1133 | 2024-12-28 | GOOFYBOYZ          | W   | 0.779      | 0.143        | 0.003 (0.000)    | 0.090 (0.010)    | 0 (0.000) |    15.16 | BeiranZz, hk, ms, Ruy2k, ThozoR     |
|            6 |     2229 | 2024-11-28 | Metizport X        | L   | 0.579      | -            | -                | -                | -         |    -8.72 | hk, ms, opdust, Ruy2k, ThozoR       |
|            5 |     2274 | 2024-11-26 | ENTERPRISE Genesis | L   | 0.567      | -            | -                | -                | -         |    -8.68 | BeiranZz, ms, opdust, Ruy2k, ThozoR |
|            4 |     2927 | 2024-11-09 | Rhyno Esports      | L   | 0.453      | -            | -                | -                | -         |    -3.17 | BeiranZz, ms, opdust, Ruy2k, ThozoR |
|            3 |     3138 | 2024-11-03 | GOOFYBOYZ          | L   | 0.413      | -            | -                | -                | -         |    -5.28 | BeiranZz, ms, opdust, Ruy2k, ThozoR |
|            2 |     3151 | 2024-11-03 | SSKT               | W   | 0.412      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.412) |     2.63 | BeiranZz, ms, opdust, Ruy2k, ThozoR |
|            1 |     3791 | 2024-10-05 | Rhyno Esports      | L   | 0.219      | -            | -                | -                | -         |    -1.59 | BeiranZz, ms, opdust, Ruy2k, ThozoR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($722.14)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-28 |      0.779 | $312.86        | $243.82         |
| 2024-11-22 |      0.539 | $261.78        | $141.10         |
| 2024-11-03 |      0.414 | $217.62        | $90.13          |
| 2024-10-06 |      0.225 | $1,098.17      | $247.09         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
