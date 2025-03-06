### Roster Details<br />
Team Name: Hesta<br />
Roster: abiraju, anttzz, frontales, Muk0s, slax<br />
Global Rank: [46](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [33]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  514.9<br />
<br />
Final Rank Value (514.9) = Starting Rank Value (516.0) + Head To Head Adjustments (-1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.177[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 516.0
- 400 + ( ( 0.044 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 516.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      181 | 2025-02-17 | Leo Team             | L   | 0.079      | -            | -                | -                | -         |    -1.62 | abiraju, anttzz, frontales, Muk0s, slax |
|            8 |      185 | 2025-02-17 | GenOne               | W   | 0.078      | 0.143        | 0.000 (0.000)    | 0.117 (0.001)    | 0 (0.000) |     0.85 | abiraju, anttzz, frontales, Muk0s, slax |
|            7 |      191 | 2025-02-17 | Phantom Esports      | W   | 0.078      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.84 | abiraju, anttzz, frontales, Muk0s, slax |
|            6 |      241 | 2025-02-15 | BAKS Esports         | L   | 0.064      | -            | -                | -                | -         |    -1.33 | abiraju, anttzz, frontales, Muk0s, slax |
|            5 |      338 | 2025-02-11 | BetBoom Team         | L   | 0.037      | -            | -                | -                | -         |    -0.60 | abiraju, anttzz, frontales, Muk0s, slax |
|            4 |      358 | 2025-02-10 | Nexus Gaming         | W   | 0.032      | 0.143        | 0.013 (0.000)    | 0.076 (0.000)    | 0 (0.000) |     0.66 | abiraju, anttzz, frontales, Muk0s, slax |
|            3 |      371 | 2025-02-10 | GamerLegion          | L   | 0.030      | -            | -                | -                | -         |    -0.63 | abiraju, anttzz, frontales, Muk0s, slax |
|            2 |      445 | 2025-02-08 | Ex-Daystar           | W   | 0.019      | 0.143        | 0.000 (0.000)    | 0.028 (0.000)    | 0 (0.000) |     0.20 | abiraju, anttzz, frontales, Muk0s, slax |
|            1 |      456 | 2025-02-08 | Natus Vincere Junior | W   | 0.018      | 0.143        | 0.060 (0.000)    | 0.603 (0.002)    | 0 (0.000) |     0.50 | abiraju, anttzz, frontales, Muk0s, slax |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
