### Roster Details<br />
Team Name: Al-Ittihad<br />
Roster: 0SAMAS, 0scar, dodz, Senpai, sry<br />
Global Rank: [206](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [29]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  526.1<br />
<br />
Final Rank Value (526.1) = Starting Rank Value (538.0) + Head To Head Adjustments (-11.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.265[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.067<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 538.0
- 400 + ( ( 0.067 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 538.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       24 | 2025-02-26 | JiJieHao          | L   | 0.930      | -            | -                | -                | -         |   -13.88 | 0SAMAS, 0scar, dodz, Senpai, sry  |
|            4 |       27 | 2025-02-26 | Mindshock         | W   | 0.929      | 0.143        | 0.000 (0.000)    | 0.075 (0.010)    | 0 (0.000) |     9.38 | 0SAMAS, 0scar, dodz, Senpai, sry  |
|            3 |       40 | 2025-02-25 | JiJieHao          | L   | 0.923      | -            | -                | -                | -         |   -14.56 | 0SAMAS, 0scar, dodz, Senpai, sry  |
|            2 |       61 | 2025-02-24 | Mindshock         | W   | 0.917      | 0.143        | 0.000 (0.000)    | 0.075 (0.010)    | 0 (0.000) |     8.90 | 0SAMAS, 0scar, dodz, Senpai, sry  |
|            1 |     1276 | 2024-11-23 | Fire Flux Esports | L   | 0.298      | -            | -                | -                | -         |    -1.74 | 0SAMAS, 0scar, Dodal, NAKO, ViTaL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($380.21)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.304 | $1,250.00      | $380.21         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
