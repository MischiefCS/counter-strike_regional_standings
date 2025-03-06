### Roster Details<br />
Team Name: HEROIC<br />
Roster: LNZ, SunPayus, tN1R, xfl0ud, yxngstxr<br />
Global Rank: [34](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [22]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  578.3<br />
<br />
Final Rank Value (578.3) = Starting Rank Value (573.4) + Head To Head Adjustments (5.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.066<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 573.4
- 400 + ( ( 0.066 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 573.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      160 | 2025-02-20 | Astralis      | W   | 0.097      | 0.143        | 1.000 (0.014)    | 0.924 (0.013)    | 0 (0.000) |     3.05 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            6 |      333 | 2025-02-11 | Metizport     | W   | 0.038      | 0.143        | 0.000 (0.000)    | 0.100 (0.001)    | 0 (0.000) |     0.49 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            5 |      341 | 2025-02-11 | BIG           | W   | 0.036      | 0.143        | 0.378 (0.002)    | 0.256 (0.001)    | 0 (0.000) |     1.12 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            4 |      361 | 2025-02-10 | 3DMAX         | L   | 0.032      | -            | -                | -                | -         |    -0.01 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            3 |      370 | 2025-02-10 | Zero Tenacity | W   | 0.030      | 0.143        | 0.000 (0.000)    | 0.105 (0.000)    | 0 (0.000) |     0.39 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            2 |      409 | 2025-02-09 | PARIVISION    | L   | 0.023      | -            | -                | -                | -         |    -0.37 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            1 |      469 | 2025-02-08 | Passion UA    | W   | 0.016      | 0.143        | 0.013 (0.000)    | 0.092 (0.000)    | 0 (0.000) |     0.29 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
