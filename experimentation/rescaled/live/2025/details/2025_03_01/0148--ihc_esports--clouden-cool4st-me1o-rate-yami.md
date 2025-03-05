### Roster Details<br />
Team Name: IHC Esports<br />
Roster: clouden, cool4st, me1o, rate, yAmi<br />
Global Rank: [148](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [16]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  718.5<br />
<br />
Final Rank Value (718.5) = Starting Rank Value (699.8) + Head To Head Adjustments (18.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.275[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.063[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 699.8
- 400 + ( ( 0.158 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 699.8


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
|           11 |      467 | 2025-02-08 | The Huns Esports          | L   | 1.000      | -            | -                | -                | -         |    -5.98 | clouden, cool4st, me1o, rate, yAmi |
|           10 |      474 | 2025-02-08 | Nomads (Mongolian team)   | W   | 1.000      | 0.669        | 0.000 (0.000)    | 0.060 (0.040)    | 0 (0.000) |     7.57 | clouden, cool4st, me1o, rate, yAmi |
|            9 |      748 | 2024-12-27 | The Huns Esports          | L   | 0.776      | -            | -                | -                | -         |    -4.58 | clouden, cool4st, me1o, rate, yAmi |
|            8 |      755 | 2024-12-26 | Eruption                  | L   | 0.769      | -            | -                | -                | -         |    -6.57 | clouden, cool4st, me1o, rate, yAmi |
|            7 |     1019 | 2024-12-06 | Chinggis Warriors         | L   | 0.631      | -            | -                | -                | -         |    -6.88 | clouden, cool4st, me1o, rate, yAmi |
|            6 |     1079 | 2024-12-04 | Just Swing (Chinese team) | W   | 0.617      | 0.742        | 0.004 (0.002)    | 0.193 (0.088)    | 0 (0.000) |     9.20 | clouden, cool4st, me1o, rate, yAmi |
|            5 |     1081 | 2024-12-03 | ATOX Esports              | W   | 0.617      | 0.742        | 0.058 (0.027)    | 0.659 (0.302)    | 0 (0.000) |    17.65 | clouden, cool4st, me1o, rate, yAmi |
|            4 |     1293 | 2024-11-22 | Just Swing (Chinese team) | L   | 0.544      | -            | -                | -                | -         |    -8.86 | cool4st, hasteka, me1o, rate, yAmi |
|            3 |     1318 | 2024-11-22 | The Huns Esports          | W   | 0.538      | 0.652        | 0.025 (0.009)    | 0.516 (0.181)    | 0 (0.000) |    14.16 | cool4st, hasteka, me1o, rate, yAmi |
|            2 |     1365 | 2024-11-19 | ATOX Esports              | L   | 0.524      | -            | -                | -                | -         |    -1.42 | cool4st, hasteka, me1o, rate, yAmi |
|            1 |     1367 | 2024-11-19 | CatEvil                   | W   | 0.523      | 0.655        | 0.000 (0.000)    | 0.064 (0.022)    | 0 (0.000) |     4.42 | cool4st, hasteka, me1o, rate, yAmi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($784.03)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-29 |      0.784 | $1,000.00      | $784.03         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
