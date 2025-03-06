### Roster Details<br />
Team Name: IHC Esports<br />
Roster: clouden, cool4st, me1o, rate, yAmi<br />
Global Rank: [129](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [14]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  681.2<br />
<br />
Final Rank Value (681.2) = Starting Rank Value (678.1) + Head To Head Adjustments (3.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.276[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 678.1
- 400 + ( ( 0.135 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 678.1


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
|           11 |      467 | 2025-02-08 | The Huns Esports          | L   | 0.810      | -            | -                | -                | -         |    -6.99 | clouden, cool4st, me1o, rate, yAmi |
|           10 |      474 | 2025-02-08 | Nomads (Mongolian team)   | W   | 0.809      | 0.143        | 0.000 (0.000)    | 0.074 (0.009)    | 0 (0.000) |     6.86 | clouden, cool4st, me1o, rate, yAmi |
|            9 |      748 | 2024-12-27 | The Huns Esports          | L   | 0.528      | -            | -                | -                | -         |    -4.58 | clouden, cool4st, me1o, rate, yAmi |
|            8 |      755 | 2024-12-26 | Eruption                  | L   | 0.521      | -            | -                | -                | -         |    -4.56 | clouden, cool4st, me1o, rate, yAmi |
|            7 |     1019 | 2024-12-06 | Chinggis Warriors         | L   | 0.383      | -            | -                | -                | -         |    -6.00 | clouden, cool4st, me1o, rate, yAmi |
|            6 |     1079 | 2024-12-04 | Just Swing (Chinese team) | W   | 0.369      | 0.333        | 0.003 (0.000)    | 0.165 (0.020)    | 0 (0.000) |     5.61 | clouden, cool4st, me1o, rate, yAmi |
|            5 |     1081 | 2024-12-03 | ATOX Esports              | W   | 0.368      | 0.333        | 0.052 (0.006)    | 0.683 (0.084)    | 0 (0.000) |     9.74 | clouden, cool4st, me1o, rate, yAmi |
|            4 |     1293 | 2024-11-22 | Just Swing (Chinese team) | L   | 0.295      | -            | -                | -                | -         |    -4.79 | cool4st, hasteka, me1o, rate, yAmi |
|            3 |     1318 | 2024-11-22 | The Huns Esports          | W   | 0.289      | 0.333        | 0.019 (0.002)    | 0.455 (0.044)    | 0 (0.000) |     6.73 | cool4st, hasteka, me1o, rate, yAmi |
|            2 |     1365 | 2024-11-19 | ATOX Esports              | L   | 0.275      | -            | -                | -                | -         |    -1.38 | cool4st, hasteka, me1o, rate, yAmi |
|            1 |     1367 | 2024-11-19 | CatEvil                   | W   | 0.275      | 0.333        | 0.000 (0.000)    | 0.046 (0.004)    | 0 (0.000) |     2.38 | cool4st, hasteka, me1o, rate, yAmi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($535.69)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-29 |      0.536 | $1,000.00      | $535.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
