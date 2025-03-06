### Roster Details<br />
Team Name: IHC Esports<br />
Roster: clouden, cool4st, me1o, rate, yAmi<br />
Global Rank: [111](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_05_05.md)<br />
Regional Rank: [12]( ../../standings_asia_2025_05_05.md)<br />
<br />
Final Rank Value:  678.6<br />
<br />
Final Rank Value (678.6) = Starting Rank Value (680.8) + Head To Head Adjustments (-2.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.282[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 680.8
- 400 + ( ( 0.129 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 680.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      467 | 2025-02-08 | The Huns Esports          | L   | 0.623      | -            | -                | -                | -         |    -6.35 | clouden, cool4st, me1o, rate, yAmi |
|           10 |      474 | 2025-02-08 | Nomads (Mongolian team)   | W   | 0.623      | 0.143        | 0.000 (0.000)    | 0.081 (0.007)    | 0 (0.000) |     5.54 | clouden, cool4st, me1o, rate, yAmi |
|            9 |      748 | 2024-12-27 | The Huns Esports          | L   | 0.341      | -            | -                | -                | -         |    -3.51 | clouden, cool4st, me1o, rate, yAmi |
|            8 |      755 | 2024-12-26 | Eruption                  | L   | 0.334      | -            | -                | -                | -         |    -2.84 | clouden, cool4st, me1o, rate, yAmi |
|            7 |     1019 | 2024-12-06 | Chinggis Warriors         | L   | 0.196      | -            | -                | -                | -         |    -3.08 | clouden, cool4st, me1o, rate, yAmi |
|            6 |     1079 | 2024-12-04 | Just Swing (Chinese team) | W   | 0.182      | 0.333        | 0.002 (0.000)    | 0.122 (0.007)    | 0 (0.000) |     2.65 | clouden, cool4st, me1o, rate, yAmi |
|            5 |     1081 | 2024-12-03 | ATOX Esports              | W   | 0.182      | 0.333        | 0.055 (0.003)    | 0.667 (0.040)    | 0 (0.000) |     4.77 | clouden, cool4st, me1o, rate, yAmi |
|            4 |     1293 | 2024-11-22 | Just Swing (Chinese team) | L   | 0.109      | -            | -                | -                | -         |    -1.84 | cool4st, hasteka, me1o, rate, yAmi |
|            3 |     1318 | 2024-11-22 | The Huns Esports          | W   | 0.103      | 0.333        | 0.012 (0.000)    | 0.392 (0.013)    | 0 (0.000) |     2.19 | cool4st, hasteka, me1o, rate, yAmi |
|            2 |     1365 | 2024-11-19 | ATOX Esports              | L   | 0.089      | -            | -                | -                | -         |    -0.46 | cool4st, hasteka, me1o, rate, yAmi |
|            1 |     1367 | 2024-11-19 | CatEvil                   | W   | 0.088      | 0.333        | 0.000 (0.000)    | 0.021 (0.001)    | 0 (0.000) |     0.73 | cool4st, hasteka, me1o, rate, yAmi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($349.03)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-29 |      0.349 | $1,000.00      | $349.03         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
