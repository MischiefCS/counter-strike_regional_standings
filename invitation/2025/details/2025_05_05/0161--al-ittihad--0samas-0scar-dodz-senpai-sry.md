### Roster Details<br />
Team Name: Al-Ittihad<br />
Roster: 0SAMAS, 0scar, dodz, Senpai, sry<br />
Global Rank: [161](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_05_05.md)<br />
Regional Rank: [20]( ../../standings_asia_2025_05_05.md)<br />
<br />
Final Rank Value:  529.7<br />
<br />
Final Rank Value (529.7) = Starting Rank Value (539.9) + Head To Head Adjustments (-10.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.255[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 539.9
- 400 + ( ( 0.064 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 539.9


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
|            5 |       24 | 2025-02-26 | JiJieHao          | L   | 0.744      | -            | -                | -                | -         |   -11.80 | 0SAMAS, 0scar, dodz, Senpai, sry  |
|            4 |       27 | 2025-02-26 | Mindshock         | W   | 0.743      | 0.143        | 0.000 (0.000)    | 0.082 (0.009)    | 0 (0.000) |     7.46 | 0SAMAS, 0scar, dodz, Senpai, sry  |
|            3 |       40 | 2025-02-25 | JiJieHao          | L   | 0.737      | -            | -                | -                | -         |   -12.23 | 0SAMAS, 0scar, dodz, Senpai, sry  |
|            2 |       61 | 2025-02-24 | Mindshock         | W   | 0.730      | 0.143        | 0.000 (0.000)    | 0.082 (0.009)    | 0 (0.000) |     7.09 | 0SAMAS, 0scar, dodz, Senpai, sry  |
|            1 |     1276 | 2024-11-23 | Fire Flux Esports | L   | 0.112      | -            | -                | -                | -         |    -0.74 | 0SAMAS, 0scar, Dodal, NAKO, ViTaL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($146.88)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.117 | $1,250.00      | $146.88         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
